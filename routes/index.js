export const base = require("express").Router()
const { check } = require("express-validator/check")
import { query } from "../config/db"
import { auth } from "../config/auth"
import { dashboard } from "../modules/common"
import autofill from "./autofill"
import college from "./college"
import recruiter from "./recruiter"
import student from "./student"
autofill()
college()
recruiter()
student()

base.get("/", (req, res) => {
  query('show tables').then((result) => {
  }).catch((err) => {
    console.log(err)
  })
  res.status(200).json({message: "welcome to api testing"})
})

base.post("/login", auth.login)

base.post("/signup", [
  check('first_name').exists(),
  check('last_name').exists(),
  check('email').isEmail(),
  check('password').exists(),
  check('user_type').toInt()
], auth.sign_up)

base.get("/email-verify", auth.verify_email)

base.get("/dashboard", (req, res) => {
  dashboard.user_data(req).then(data => {
    res.status(200).send(data)
  }).catch(err=> {
    res.status(400).send({message: "Bad request", error:err})
  })

})

base.get("/user", (req, res) => {
  let token_email = auth.decode_token(req.get('x-api-key')).user.email
  query(`SELECT * FROM users WHERE users.email=?`,token_email).then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send({message: "Bad requets", error:err})
  })
})

// TODO move this to college controller and change api to /college/alldrives
base.get("/drives", (req,res) => {
  query(`SELECT rd.id As drive_id , r.name as company_name, rd.name As drive_name,
        rd.drive_date, rd.no_positions ,
        ( SELECT college_accept FROM mapping_drive_college mdc WHERE mdc.college_id = ? AND mdc.drive_id = rd.id) As college_applied
        FROM recruiter_drive rd
        INNER
        JOIN recruiter r
        ON r.id = rd.recruiter_id`, [req.basic_data.college_id]).then(drives => {
   let add_placeholder_data = (object) => {
     object.college_applicants_no = 1
     // object.student_applicants_no = 5
     return object
   }
   drives.map(add_placeholder_data)
   res.status(200).send(drives)
 }).catch(err => {
   res.status(400).send({message: "Bad request", error: err})
 })
})

base.post('/drives/:driveid/apply', (req, res) => {
  // TODO if drive type is single then change recruiter_accept to true in mapping_drive_college
  let values = {
    college_id: req.basic_data.college_id,
    drive_id: req.params.driveid
  }
  query(`INSERT INTO mapping_drive_college SET ?`, values)
    .then(data => {
      res.status(200).json({message: "Applied successfully!"})
    }).catch(err => {
      res.status(400).send({message: "Server Error", error: err})
    })
})

// If no route is matched by now, it must be a 404
// base.use((req, res, next) => {
//   res.status(404).json({ "error": "Endpoint not found" });
//   next();
// });

// base.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "production") {
//     return res.status(500).json({ "error": "Unexpected error: " + error });
//   }
//   next(error);
// });
