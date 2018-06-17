export const basic = require("express").Router()
const Promise = require("bluebird")
import { getConnection }  from "../config/db"
import { query } from "../config/db"
import { auth } from "../config/auth"
import recruiter from "./recruiter"
import student from "./student"
import college from "./college"
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
basic.post("/signup", auth.sign_up)
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
