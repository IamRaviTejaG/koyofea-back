import * as jwt from "jwt-simple"
const passport = require("passport")
const moment = require("moment")
import { db , query} from "./db"
import { Strategy, ExtractJwt } from "passport-jwt"
const dotenv = require("dotenv").config()

function getStrategy(){
  let options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromHeader("x-api-key"),
    passReqToCallback: true
  }

  return new Strategy(options, (req, payload, done) => {
    db.query("show * from users where email=" + payload.email, (row, err) =>{
      if(err) {
        return done(err, false)
      }
      if(row[0]){
        return done(null, row[0])
      } else {
        return done(null, false)
      }
    })
  })
}

export let auth = {

  initialize : () => {
    passport.use("jwt", getStrategy())
    return passport.initialize()
  },
  authenticate : (callback) => passport.authenticate("jwt", {sesson : false, failWithError: true}, callback),
  genToken: (user) => {
    let expires = moment().utc().add({ days: 7 }).unix();
    let token = jwt.encode({
        exp: expires,
        email: user.email
    }, process.env.JWT_SECRET);

    return {
        token: token,
        expires: moment.unix(expires).format(),
        user: user
    };
  },
  login: (req, res) => {
      let email = req.body.email
      let password = req.body.password
      console.log(email, password)
      query(`select * from users where email="${email}"`).then((rows) => {
        console.log(rows)
        if(!rows[0]) {
          throw "User not found"
        }
        if (!(rows[0].password == password)){
          throw "wrong password"
        }
        res.status(200).json(auth.genToken(rows[0]))
      }).catch((err) => {
        res.status(401).json({message: "Login failed", error: err})
      })

  },
  sign_up: (req, res) => {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    let password = req.body.password
    let user_type = req.body.user_type
    query(`select * from users where email="${email}"`).then((rows) => {
      if(rows[0]) {
        throw "Email already in use"
      } else {
        query(`insert into users (first_name, last_name, email, password, user_type_id) value ("${first_name}","${last_name}","${email}","${password}",${user_type})`).then((row) => {
          res.status(200).json(auth.genToken(rows[0]))
        }).catch((err) => {
          res.status(400).json({message: "Sign-up failed", error: err})
        })
      }
    }).catch((err) => {
      res.status(400).json({message: "Sign-up failed", error: err})
    })
    
  }
}
