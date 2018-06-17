const dotenv = require("dotenv").config()
const moment = require("moment")
const passport = require("passport")
import * as jwt from "jwt-simple"
import { db, query} from "./db"
import { Strategy, ExtractJwt } from "passport-jwt"

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
    }, process.env.JWT_SECRET)
    return {
        token: token,
        expires: moment.unix(expires).format(),
        user: user
    }
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
    let email = req.body.email
    let values = Object.values(req.body)
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'SELECT * FROM `users` WHERE email="' + req.body.email + '"'

    query(sql).then((rows) => {
      if (rows[0]) {
        throw "EMail already used!"
      } else {
        let sql = 'INSERT INTO `users` (first_name, last_name, email,\
        password, user_type_id) VALUES (' + values_str + ')'
        query(sql).then((row) => {
          res.status(200).json(auth.genToken(req.body))
        }).catch((err) => {
          res.status(400).json({message: "Sign-up failed 2", error: err})
        })
      }
    }).catch((err) => {
        res.status(400).json({message: "Sign-up failed", error: err})
    })
  }
}
