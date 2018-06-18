const bcrypt = require('bcrypt')
const dotenv = require("dotenv").config()
const moment = require("moment")
const passport = require("passport")
const { check, validationResult } = require('express-validator/check')
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
    let user_password = req.body.password
    query(`select * from users where email="${email}"`).then((rows) => {
      if (!rows[0]) {
        throw "User not found"
      } else {
        bcrypt.compare(user_password, rows[0].password).then((result) => {
          if (result) {
            res.status(200).json({message: "Password verified!",
            token: auth.genToken(rows[0]).token})
          } else {
            throw "Incorrect credentials!"
          }
        }).catch((err) => {
          res.status(401).json({message: "Incorrect credentials!"})
        })
      }
    }).catch((err) => {
      res.status(401).json({message: "Login failed!", error: err})
    })
  },

  sign_up: (req, res) => {
    let email = req.body.email
    let unhashed_password = req.body.password
    let values = Object.values(req.body)
    const errors = validationResult(req).mapped()
    if (Object.keys(errors).length === 0) {
      let sql = 'SELECT * FROM `users` WHERE email="' + req.body.email + '"'
      query(sql).then((rows) => {
        if (rows[0]) {
          throw "Email already used!"
        } else {
          bcrypt.hash(unhashed_password, parseInt(process.env.SALT_ROUNDS)).then(
            (hash) => {
            console.log(hash.yellow)
            values[3] = hash
            let values_str = values.map(value => `"${value}"`).join(', ')
            let sql = 'INSERT INTO `users` (first_name, last_name, email,\
            password, user_type) VALUES (' + values_str + ')'
            query(sql).then((row) => {
              res.status(200).json(auth.genToken(req.body))
            }).catch((err) => {
              res.status(400).json({message: "Sign-up failed", error: err})
            })
          }).catch((err) => {
            throw "Error storing hash into Object.values(req.body)"
          })
          // let values_str = values.map(value => `"${value}"`).join(', ')
          // let sql = 'INSERT INTO `users` (first_name, last_name, email,\
          // password, user_type) VALUES (' + values_str + ')'
          // query(sql).then((row) => {
          //   res.status(200).json(auth.genToken(req.body))
          // }).catch((err) => {
          //   res.status(400).json({message: "Sign-up failed", error: err})
          // })
        }
      }).catch((err) => {
          res.status(400).json({message: "Sign-up failed", error: err})
      })
    } else {
      res.status(400).json({
        message: "Error!",
        error: "Invalid email!"
      })
    }
    // } else {
    //   const errors = validationResult(req)
    //   res.status(400).json({message: "Invalid Entry", error: errors.array()})
    // }
  }
}
