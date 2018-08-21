import { auth } from '../config/auth'
const rp = require('request-promise')
require('colors')


// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const recruiterBaseUrl = serverBaseUrl + '/recruiter'

describe('7. TESTING RECRUITER ROUTES', () => {
  describe('7.1. /hr, /hr/<hrid>, /hr/<hrid>/extra', () => {
    it('Returns list of HRs, a HR\'s info', done => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl + '/hr',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/hr/' + body[0].id,
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(body).to.be.an('object')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Returns a HR\'s extra info', done => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl + '/hr',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/hr/' + body[0].id + '/extra',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(body).to.be.an('object')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('7.2. /:rid/<drives, staff, colleges>/<driveid>', () => {
    it ('/<rid>/<drives')

  })
})
