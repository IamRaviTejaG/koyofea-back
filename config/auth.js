import * as jwt from "jwt-simple"
const passport = require("passport")
const moment = require("moment")
import { db } from "./db"
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
  // login: (req, res) => {
  //   try {

  //   } catch {

  //   }
  // },
}
