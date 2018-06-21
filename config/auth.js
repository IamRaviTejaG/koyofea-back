const bcrypt = require('bcrypt')
const dotenv = require("dotenv").config()
const moment = require("moment")
const Promise = require("bluebird")
const passport = require("passport")
const { validationResult } = require('express-validator/check')
import * as jwt from "jwt-simple"
import { db, query } from "./db"
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

  authenticate : callback => passport.authenticate("jwt", {sesson : false, failWithError: true}, callback),

  genToken: user => {
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
    let sql = `SELECT * FROM users WHERE email= ?`
    let a = query(sql, [email])
    let b = a.then(rows => {
      if (!rows[0]) {
        throw "Email not register"
      }
      if(rows[0].email_verified == 0){
        throw "Email not verified"
      }
      return bcrypt.compare(user_password, rows[0].password)
    })
    Promise.join(a,b).then(([rows,result]) => {
      if (!result) {
        throw "Incorrect credentials!"
      } 
      res.status(200).json({message: "Login successful",token: auth.genToken(rows[0]).token, user: rows[0]})
    }).catch((err) => {
      res.status(401).json({message: "Login failed!", error: err})
    })
  },

  sign_up: (req, res) => {
    let email = req.body.email
    let unhashed_password = req.body.password
    let object = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: email,
      user_type_id: req.body.user_type
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Error!", error: errors.mapped() })
    }
    let sql = `SELECT * FROM users WHERE email= ?`
    query(sql, [email]).then((rows) => {
      if (rows[0]) {
        throw "Email already used!"
      } 
      return bcrypt.hash(unhashed_password, parseInt(process.env.SALT_ROUNDS))
    }).then((hash) => {
      let sql = `INSERT INTO users SET ?`
      object.password = hash;
      return query(sql, object)
    }).then(row => {
      res.status(200).json(auth.genToken(req.body))
    }).catch(err => {
      res.status(400).json({message: "Sign-up failed", error: err})
    })       
  },

  verify_email: (req, res) => {
    let verify_token = req.query.email_token
    let sql = `SELECT * FROM users WHERE email_token="${verify_token}"`
    query(sql).then(row => {
      if(!row[0]){
        throw "Wrong Verification Url"
      }
      let sql = `UPDATE users SET email_verified = true WHERE email_token="${verify_token}"`
      return query(sql)
    }).then((result) => {
      res.status(200).json({message: "Email verification Successful", error: null})
    }).catch(err => {
      res.status(400).json({message: "Email verification failed", error: err})
    })
  }
  
}
