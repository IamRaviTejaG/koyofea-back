export const base = require("express").Router()
const { check } = require("express-validator/check")
import { query } from "../config/db"
import { auth } from "../config/auth"
import recruiter from "./recruiter"
import student from "./student"
import college from "./college"
import { dashboard } from "../modules/common"
recruiter()
student()
college()

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

base.get("/drives", (req,res) => {
  query(`SELECT * FROM recruiter_drive`).then(drives => {
    res.status(200).send(drives)
  }).catch(err => {
    res.status(400).send({message: "Bad request", error: err})
  })
})
// // If no route is matched by now, it must be a 404
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
