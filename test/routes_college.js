import { auth } from '../config/auth'
const rp = require('request-promise')
require('colors')


// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const collegeBaseUrl = serverBaseUrl + '/college'

describe('6. TESTING COLLEGE ROUTES', () => {
  describe('6.1. /', () => {
    it('Should return JSON containing list of colleges', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl,
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('6.2. /role', () => {
    it('Should return a list of different roles in a college', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/role',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
