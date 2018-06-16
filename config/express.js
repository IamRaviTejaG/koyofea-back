const dotenv = require("dotenv").config()
const express = require("express")
const morgan = require('morgan')
import { auth } from "./auth"
import { basic } from "../routes"
import { student } from "../routes/student"
import { recruiter } from "../routes/recruiter"
import { college } from "../routes/college"
//const auth = require("../controllers/auth").default;
const bodyParser = require("body-parser")
//const expressValidator = require("express-validator");


let app = express()
app.use(morgan('dev'))
console.log(auth.genToken({email: "ankit"}))
app.use(auth.initialize())
app.all("/" + "*", (req, res, next) => {
  return auth.authenticate((err, user, info) => {
    if(err) {return next(err)}
    if(!user) {
      if (info.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Your token has expired. Please generate a new one" })
      } else {
        return res.status(401).json({ message: info.message })
      }
    }
    app.set("user", user)
    return next()
  })(req, res, next)
})


app.use(bodyParser.json())
app.use("/", basic)
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
//routes(app)

export default app
