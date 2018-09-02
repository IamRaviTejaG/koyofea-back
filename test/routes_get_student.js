import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const studentBaseUrl = serverBaseUrl + '/student'

describe('8. GET: STUDENT ROUTES', () => {
  describe('8.1. /:studentid/<education, experience, projects>', () => {
    it('Returns a student\'s education', done => {
      let options = {
        method: 'GET',
        url: studentBaseUrl + '/3/education',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Returns a student\'s experience', done => {
      let options = {
        method: 'GET',
        url: studentBaseUrl + '/3/experience',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Returns a student\'s projects', done => {
      let options = {
        method: 'GET',
        url: studentBaseUrl + '/3/projects',
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
