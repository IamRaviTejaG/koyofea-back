const bcrypt = require("bcrypt")
const dotenv = require("dotenv").config()
const moment = require("moment")
const Promise = require("bluebird")
const passport = require("passport")
const uuid = require("uuid/v4")
const { validationResult } = require('express-validator/check')
import * as jwt from "jwt-simple"
import { db, query } from "./db"
import { Strategy, ExtractJwt } from "passport-jwt"

// This function below generates and returns a new strategy object to be
// further used with passport.
function getStrategy() {
  let options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromHeader("x-api-key"),
    passReqToCallback: true
  }
  return new Strategy(options, (req, payload, done) => {
    db.query("SHOW * FROM users WHERE email=" + payload.email, (row, err) => {
      if (err) {
        return done(err, false)
      }
      if (row) {
        return done(null, row)
      } else {
        return done(null, false)
      }
    })
  })
}

// auth is an object of functions that handle authentication.
export let auth = {
  // Initializes the passport session for the user.
  initialize: () => {
    passport.use("jwt", getStrategy())
    return passport.initialize()
  },

  // This function is meant for future use. Safely ignore this for now.
  authenticate: callback => passport.authenticate("jwt",
    {sesson: false, failWithError: true},
    callback
  ),

  // Takes the user data and creates a JSON Web Token (JWT) for the
  // user and returns it.
  genToken: user => {
    let expires = moment().utc().add({ days: 7 }).unix();
    let token = jwt.encode({
      exp: expires,
      user:user
    }, process.env.JWT_SECRET)
    return {
      token: token,
      expires: moment.unix(expires).format(),
      user: user
    }
  },

  // Takes in the token as input and returns the decrypted data.
  decode_token: token => jwt.decode(token, process.env.JWT_SECRET),

  // Handles login requests.
  login: (req, res) => {
    let email = req.body.email
    let user_password = req.body.password
    let sql = `SELECT * FROM users WHERE email= ?`
    let a = query(sql, [email])
    let b = a.then(rows => {
      if (!rows) {
        throw "Email not registered!"
      }
      if (rows.email_verified == 0){
        throw "Email not verified!"
      }
      console.log(rows.password)
      return bcrypt.compare(user_password, rows.password)
    })
    Promise.all([a,b]).then(([rows, result]) => {
      if (!result) {
        throw "Incorrect credentials!"
      }
      res.status(200).json({
        message: "Login successful",
        token: auth.genToken(rows).token,
        user: rows
      })
    }).catch((err) => {
      res.status(401).json({message: "Login failed!", error: err})
    })
  },

  // Handles signup requests.
  sign_up: (req, res) => {
    let email = req.body.email
    let unhashed_password = req.body.password
    let object = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: email,
      user_type_id: req.body.user_type,
      verification_token: uuid()
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({message: "Error!", error: errors.mapped()})
    }
    let sql = `SELECT * FROM users WHERE email= ?`
    query(sql, [email]).then(rows => {
      if (rows.length > 0) {
        throw "Email already used!"
      }
      return bcrypt.hash(unhashed_password, parseInt(process.env.SALT_ROUNDS))
    }).then(hash => {
      let sql = `INSERT INTO users SET ?`
      object.password = hash;
      return query(sql, object)
    }).then(row => {
      res.status(200).json({
        message: "Signup successful!",
        verificationToken: object.verification_token
      })
    }).catch(err => {
      res.status(400).json({message: "Signup failed!", error: err})
    })
  },

  // Helps to verify the user email and updates the database accordingly.
  verify_email: (req, res) => {
    let token = req.params.verificationtoken
    let sql1 = `UPDATE users u SET u.email_verified = 1
              WHERE u.verification_token='${token}'`
    let sql2 = `SELECT u.email_verified FROM users u
                WHERE u.verification_token='${token}'`
    query(sql2).then(row2 => {
      if (row2.email_verified === 1) {
        res.status(400).json({message: "Already verified!"});
      } else if (row2.email_verified === undefined) {
        throw "Invalid verification URL"
      } else {
        query(sql1).then(row1 => {
          res.status(200).json({message: "Email verified!"});
        })
      }
    }).catch(err => {
      res.status(400).json({error: err})
    })
  }
  // verify_email: (req, res) => {
  //   let verify_token = req.query.email_token
  //   let sql = `SELECT * FROM users WHERE email_token="${verify_token}"`
  //   query(sql).then(row => {
  //     if(!row){
  //       throw "Wrong Verification URL"
  //     }
  //     let sql = `UPDATE users SET email_verified = true
  //               WHERE email_token="${verify_token}"`
  //     return query(sql)
  //   }).then((result) => {
  //     res.status(200).json({
  //       message: "Email verification successful!",
  //       error: null
  //     })
  //   }).catch(err => {
  //     res.status(400).json({message: "Email verification failed!", error: err})
  //   })
  // }
}
