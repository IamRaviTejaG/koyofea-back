import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const collegeBaseUrl = serverBaseUrl + '/college'

describe('6. GET: COLLEGE ROUTES', () => {
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

  describe('6.3. /coordinator, /coordinator/:coordinatorid', () => {
    it('Should return a list of coordinators', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/coordinator',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: collegeBaseUrl + '/coordinator/' + body[0].id,
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

  describe('6.4. /:collegeid/<drives, recruiters, students, staff>', () => {
    it('Returns a college\'s info', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/11',
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
    it('Returns a college\'s drives', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/11/drives',
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
    it('Returns a college\'s recruiters', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/11/recruiters',
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
    it('Returns a college\'s staff', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/11/staff',
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
    it('Returns a college\'s students', done => {
      let options = {
        method: 'GET',
        url: collegeBaseUrl + '/11/students',
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
