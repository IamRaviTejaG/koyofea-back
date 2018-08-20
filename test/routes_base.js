import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'

describe('5. TESTING BASE ROUTES', () => {
  describe('5.1. /login', () => {
    it('Should return JSON containing the authentication token', done => {
      let options = {
        method: 'POST',
        url: serverBaseUrl + '/login',
        body: {
          email: 'test@test.com',
          password: 'test'
        },
        json: true
      }
      rp(options).then(body => {
        let decodedTokenData = auth.decode_token(body.token)
        expect(decodedTokenData.user.email).to.be.equal(options.body.email)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('5.2. /signup, /verify', () => {
    it('Should return 200 with an appropriate body in the request', done => {
      let date = Math.floor(new Date()).toString()
      let email = date + '@test.com'
      let options = {
        method: 'POST',
        url: serverBaseUrl + '/signup',
        body: {
          first_name: 'RUNNING',
          last_name: 'TEST',
          email: email,
          password: date,
          user_type: 1
        },
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Signup successful!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Should return 400 without an appropriate body in the request', done => {
      let options = {
        method: 'POST',
        url: serverBaseUrl + '/signup',
        json: true,
        simple: false
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Error!')
        expect(400)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Returns 200 on successful email verification', done => {
      let date = Math.floor(new Date()).toString()
      let email = date + '@test.com'
      let options = {
        method: 'POST',
        url: serverBaseUrl + '/signup',
        body: {
          first_name: 'RUNNING',
          last_name: 'TEST',
          email: email,
          password: date,
          user_type: 1
        },
        json: true
      }
      rp(options).then(body => {
        let options = {
          method: 'GET',
          url: serverBaseUrl + '/verify/' + body.verificationToken,
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Email verified!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
