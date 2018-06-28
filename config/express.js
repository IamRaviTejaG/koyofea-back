const bodyparser = require("body-parser")
const dotenv = require("dotenv").config()
const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
import { auth } from "./auth"
import { base } from "../routes"
import { student } from "../routes/student"
import { recruiter } from "../routes/recruiter"
import { college } from "../routes/college"
import { validationResult } from "express-validator/check";
import { dashboard } from "../modules/common";
import { ESRCH } from "constants";
//const auth = require("../controllers/auth").default;
//const expressValidator = require("express-validator");


let app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(auth.initialize())
app.use(bodyparser.json()) //for parsing application/json()
app.use(bodyparser.urlencoded({extended: true}))
// app.all("/" + "*", (req, res, next) => {
//   return auth.authenticate((err, user, info) => {
//     if(err) {return next(err)}
//     if(!user) {
//       if (info.name === "TokenExpiredError") {
//         return res.status(401).json({ message: "Your token has expired. Please generate a new one" })
//       } else {
//         return res.status(401).json({ message: info.message })
//       }
//     }
//     app.set("user", user)
//     return next()
//   })(req, res, next)
// })
app.all("/" + "*", (req, res, next) => {
  if ( 
    req.path == '/login' 
    || req.path == '/' 
    || req.path == '/favicon.ico' 
    || req.path == '/robots.txt' 
    || req.path == '/signup') {
    return next();
  } 
  let token = auth.decode_token(req.get('x-api-key'))
  req.token_data = token
  dashboard.user_data(req).then(data => {
    req.basic_data = data[0]
    next()
  }).catch(err => {
    return res.status(400).send({message: "Bad request", error: err})
  })  
})


app.use("/", base)
app.use("/student", student)
app.use("/college", college)
app.use("/recruiter", recruiter)

//app.use(expressValidator());

//app.use(auth.initialize());

// app.all(process.env.API_BASE + "*", (req, res, next) => {
//     if (req.path.includes(process.env.API_BASE + "login")) return next();

//     return auth.authenticate((err, user, info) => {
//         if (err) { return next(err); }
//         if (!user) {
//             if (info.name === "TokenExpiredError") {
//                 return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
//             } else {
//                 return res.status(401).json({ message: info.message });
//             }
//         }
//         app.set("user", user);
//         return next();
//     })(req, res, next);
// });

export default app
