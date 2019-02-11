import { auth } from './auth'
import { base } from '../routes'
import { autofill } from '../routes/autofill'
import { autofillCollections } from '../routes/autofill_collections'
import { college } from '../routes/college'
import { recruiter } from '../routes/recruiter'
import { student } from '../routes/student'
import { dashboard } from '../modules/common'
import { query } from './db'
const bodyparser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

export default (app) => {
  app.use(express.static('/home/ubuntu/koyofea-backend/landing_page'))
  app.use(cors())
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'))
  }
  app.use(auth.initialize())
  app.use(bodyparser.json()) // for parsing application/json()
  app.use(bodyparser.urlencoded({extended: true}))

  // Middleware for token
  app.all('/api/*', (req, res, next) => {
    if (
      req.path === '/api/login' ||
      req.path === '/api' ||
      req.path === '/favicon.ico' ||
      req.path === '/robots.txt' ||
      req.path === '/api/signup' ||
      req.path === '/api/autofill/duration' ||
      req.path.slice(0, 11) === '/api/verify' ||
      process.env.NODE_ENV === 'test'
    ) {
      // console.log("SKIP MIDDLEWARE: 1/4 (token verification)".cyan)
      return next()
    }
    let token = auth.decode_token(req.get('x-api-key'))
    req.token_data = token
    dashboard.user_data(req).then(data => {
      req.basic_data = data
      next()
    }).catch(err => {
      return res.status(400).send({message: 'Bad Request!', error: err})
    })
  })

  //  Middleware for email_verified
  app.all('/api/*', (req, res, next) => {
    if (
      req.path === '/api/login' ||
      req.path === '/api' ||
      req.path === '/favicon.ico' ||
      req.path === '/robots.txt' ||
      req.path === '/api/signup' ||
      req.path === '/api/autofill/duration' ||
      req.path.slice(0, 11) === '/api/verify' ||
      process.env.NODE_ENV === 'test'
    ) {
      // console.log("SKIP MIDDLEWARE: 2/4 (email)".magenta)
      return next()
    }
    // TODO: add common code for getting data form user table
    let tokenEmail = auth.decode_token(req.get('x-api-key')).user.email
    query(`SELECT * FROM users WHERE users.email=?`, tokenEmail).then(data => {
      if (data.email_verified) {
        next()
      } else {
        res.status(400).send({message: 'Email not verified!', error: {}})
      }
    }).catch(err => {
      res.status(500).send({message: 'Bad Request!', error: err})
    })
  })

  // Middleware for data1
  app.all('/api/*', (req, res, next) => {
    if (
      req.path === '/api/login' ||
      req.path === '/api' ||
      req.path === '/favicon.ico' ||
      req.path === '/robots.txt' ||
      req.path === '/api/signup' ||
      req.path === '/api/recruiter/hr' ||
      req.path === '/api/autofill/duration' ||
      req.path === '/api/dashboard' ||
      req.path === '/api/user' ||
      req.path === '/api/college/base' ||
      req.path === '/college/coordinator' ||
      req.path.slice(0, 11) === '/api/verify' ||
      process.env.NODE_ENV === 'test'
    ) {
      // console.log("SKIP MIDDLEWARE: 3/4 (data1)".blue)
      return next()
    }
    // TODO: add common code for getting data form user table
    let tokenEmail = auth.decode_token(req.get('x-api-key')).user.email
    query(`SELECT * FROM users WHERE users.email=?`, tokenEmail).then(data => {
      if (data.data1) {
        next()
      } else {
        res.status(400).send({message: 'Personal info not found!', error: {}})
      }
    }).catch(err => {
      res.status(500).send({message: 'Bad Request!', error: err})
    })
  })

  // Middleware for data2
  app.all('/api/*', (req, res, next) => {
    if (
      req.path === '/api/login' ||
      req.path === '/api' ||
      req.path === '/favicon.ico' ||
      req.path === '/robots.txt' ||
      req.path === '/api/signup' ||
      req.path === '/api/autofill/duration' ||
      req.path === '/api/recruiter/hr' ||
      req.path === '/api/recruiter/base' ||
      req.path === '/api/college/base' ||
      req.path === '/api/college/coordinator' ||
      req.path.slice(0, 11) === '/api/verify' ||
      process.env.NODE_ENV === 'test'
    ) {
      // console.log("SKIP MIDDLEWARE: 4/4 (data2)".yellow)
      return next()
    }
    // TODO: add common code for getting data form user table
    let tokenEmail = auth.decode_token(req.get('x-api-key')).user.email
    query(`SELECT * FROM users WHERE users.email=?`, tokenEmail).then(data => {
      if (data.email_verified) {
        next()
      } else {
        res.status(400).send({message: 'Corporation info not found!', error: {}})
      }
    }).catch(err => {
      res.status(500).send({message: 'Bad Request!', error: err})
    })
  })

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

  app.use('/api', base)
  app.use('/api/autofill', autofill)
  app.use('/api/autofill-collections', autofillCollections)
  app.use('/api/college', college)
  app.use('/api/recruiter', recruiter)
  app.use('/api/student', student)
}
