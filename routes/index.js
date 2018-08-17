import { query } from '../config/db'
import { auth } from '../config/auth'
import { dashboard } from '../modules/common'
import autofill from './autofill'
import autofillCollections from './autofill_collections'
import college from './college'
import recruiter from './recruiter'
import student from './student'
export const base = require('express').Router()
const { check } = require('express-validator/check')
autofill()
autofillCollections()
college()
recruiter()
student()

base.get('/', (req, res) => {
  res.status(200).json({message: 'API TEST: WORKING FINE'})
})

base.post('/login', auth.login)

base.post('/signup',
  [
    check('first_name').exists(),
    check('last_name').exists(),
    check('email').isEmail(),
    check('password').exists(),
    check('user_type').toInt()
  ],
  auth.sign_up
)

// email-verify route is now deprecated.
// base.get("/email-verify", auth.verify_email);

base.get('/verify/:verificationtoken', auth.verify_email)

base.get('/dashboard', (req, res) => {
  dashboard
    .user_data(req)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
})

base.get('/user', (req, res) => {
  let tokenEmail = auth.decode_token(req.get('x-api-key')).user.email
  query(`SELECT * FROM users WHERE users.email=?`, tokenEmail)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({message: 'Bad Request!', error: err})
    })
})

// // TODO move this to college controller and change api to /college/alldrives
// base.get("/drives", (req, res) => {
//   // let sql = `SELECT rd.id As drive_id , r.name as company_name, rd.name As drive_name,
//   //     rd.drive_date, rd.no_positions ,
//   //     ( SELECT college_accept FROM mapping_drive_college mdc WHERE mdc.college_id = ? AND mdc.drive_id = rd.id) As college_applied
//   //     FROM recruiter_drive rd
//   //     INNER
//   //     JOIN recruiter r
//   //     ON r.id = rd.recruiter_id`,
//   let sql = `SELECT rd.id As drive_id , r.name as company_name,
//         rd.name As drive_name, rd.drive_date, rd.no_positions
//         FROM recruiter_drive rd
//         INNER
//         JOIN recruiter r
//         ON r.id = rd.recruiter_id`;
//
//   query(sql) // [req.basic_data.college_id])
//     .then(drives => {
//       let add_placeholder_data = object => {
//         object.college_applicants_no = 1;
//         // object.student_applicants_no = 5
//         return object;
//       };
//       drives.map(add_placeholder_data);
//       res.status(200).json(drives);
//     })
//     .catch(err => {
//       res.status(400).json({message: "Bad Request!", error: err});
//     });
// });
//
// base.get("/drives/:driveid", (req, res) => {
//   query(
//     `SELECT rd.*, r.name As company_name
//         FROM recruiter_drive rd
//         INNER
//         JOIN recruiter r
//         ON r.id = rd.recruiter_id
//         WHERE rd.id = ?`,
//     [req.params.driveid]
//   )
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({message: "Bad Request!", error: err});
//     });
// });
//
// base.get("/drives/:driveid/rounds", (req, res) => {
//   query(
//     `SELECT rdr.*, rrt.name As round_name
//         FROM recruiter_drive_round rdr
//         INNER
//         JOIN recruiter_round_type rrt
//         ON rrt.id = rdr.recruiter_round_type_id
//         WHERE rdr.recruiter_drive_id = ?`,
//     [req.params.driveid]
//   )
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({message: "Bad Request!", error: err});
//     });
// });
//
// base.get("/drives/:driveid/eligibility", (req, res) => {
//   query(
//     `SELECT rde.*, ret.name As eligibility_name, gs.name As grade_scale_name
//         FROM recruiter_drive_eligibility rde
//         INNER
//         JOIN eligibility_type ret
//         ON ret.id = rde.eligibility_type_id
//         INNER
//         JOIN grade_scale gs
//         ON gs.id = rde.grade_scale_id
//         WHERE rde.recruiter_drive_id = ?`,
//     [req.params.driveid]
//   )
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({message: "Bad Request!", error: err});
//     });
// });
//
// base.post("/drives/:driveid/apply", (req, res) => {
//   // TODO if drive type is single then change recruiter_accept to true in mapping_drive_college
//   let values = {
//     college_id: req.basic_data.college_id,
//     drive_id: req.params.driveid
//   };
//   query(`INSERT INTO mapping_drive_college SET ?`, values)
//     .then(data => {
//       res.status(200).json({message: "Applied Successfully!"});
//     })
//     .catch(err => {
//       res.status(400).json({message: "Server Error", error: err});
//     });
// });

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
