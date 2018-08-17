import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'

describe('6. TESTING BASE ROUTES', () => {
  describe('6.1. /login', () => {
    it('Should return JSON containing the authentication token', done => {
      let options = {
        method: 'POST',
        url: serverBaseUrl + '/login',
        body: {
          email: 'raviteja@gmail.com',
          password: 'teja'
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
})
