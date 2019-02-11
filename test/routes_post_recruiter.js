import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const recruiterBaseUrl = serverBaseUrl + '/recruiter'

describe('10. POST: RECRUITER ROUTES', () => {
  describe('10.1. /hr/<hrid>/extra', () => {
    it('Adds an HR\'s extra info to the DB', done => {
      let options = {
        method: 'POST',
        url: recruiterBaseUrl + '/hr/51/extra',
        body: {
          recruiter_industry_id: 1,
          recruiter_id: 51
        },
        json: true
      }
      rp(options).then(body => {
        console.log(body)
        // expect(body).to.be.an('object')
        // expect(JSON.strigify(body)).to.equal(JSON.stringify(options.body))
        done()
      }).catch(err => {
        done(err)
      })
      // }).catch(err => {
      //   done(err)
      // })
    })
  })
})
