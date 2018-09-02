import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const collegeBaseUrl = serverBaseUrl + '/college'

describe('9. POST: COLLEGE ROUTES', () => {
  describe('9.1. /coordinator', () => {
    it('Should add a new coordinator info to the DB', done => {
      let date = (new Date()).toISOString().slice(0, 10)
      let options = {
        method: 'POST',
        url: collegeBaseUrl + '/coordinator',
        body: {
          first_name: 'TEST',
          last_name: 'COORDINATOR',
          email: 'coordinator@test.com',
          phone: '111',
          college_role_id: 2,
          gender_id: 1,
          bio: 'TESTING TESTING',
          designation: 'TESTER',
          verified_status: 0,
          created_date: date
        },
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(JSON.stringify(options.body)).to.equal(JSON.stringify(body))
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
