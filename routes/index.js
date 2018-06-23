export const basic = require("express").Router()
const { check } = require("express-validator/check")
import { query } from "../config/db"
import { auth } from "../config/auth"
import recruiter from "./recruiter"
import student from "./student"
import college from "./college"
import { dashboard } from "../controllers";
recruiter()
student()
college()

basic.get("/", (req, res) => {
  query('show tables').then((result) => {
  }).catch((err) => {
    console.log(err)
  })
  res.status(200).json({message: "welcome to api testing"})
})

basic.post("/login", auth.login)
basic.post("/signup", [
  check('first_name').exists(),
  check('last_name').exists(),
  check('email').isEmail(),
  check('password').exists(),
  check('user_type').toInt()
], auth.sign_up)
basic.get("/email-verify", auth.verify_email)
basic.get("/dashboard", (req, res) => {
  dashboard.basic_data(req).then(data => {
    res.status(200).send(data)
  }).catch(err=> {
    res.status(400).send({message: "Bad request", error:err})
  })
  
})
basic.get("/user", (req, res) => {
  let token_email = auth.decode_token(req.get('x-api-key')).user.email
  query(`SELECT * FROM users WHERE users.email=?`,token_email).then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send({message: "Bad requets", error:err})
  })
})
// // If no route is matched by now, it must be a 404
// basic.use((req, res, next) => {
//   res.status(404).json({ "error": "Endpoint not found" });
//   next();
// });

// basic.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "production") {
//     return res.status(500).json({ "error": "Unexpected error: " + error });
//   }
//   next(error);
// });
