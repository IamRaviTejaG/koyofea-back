import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const recruiterBaseUrl = serverBaseUrl + '/recruiter'

describe('7. GET: RECRUITER ROUTES', () => {
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

  describe('7.2. /:rid/<drives, staff, colleges>', () => {
    it ('Checks all the recruiter ID routes', done  => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl,
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/' + body[0].id + 'drives',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/' + body[0].id + 'staff',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/' + body[0].id + 'college',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('7.3. /:rid/drives/requested', () => {
    it ('Checks the requested drive route', done  => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl,
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/' + body[0].id + 'requested',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('7.4. /drives/:driveid/<rounds, eligibility>', () => {
    it ('Checks a drive\'s rounds route', done  => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl + '/drives',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/drives' + body[0].id + '/rounds',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it ('Checks a drive\'s eligibility route', done  => {
      let options = {
        method: 'GET',
        url: recruiterBaseUrl + '/drives',
        json: true
      }
      rp(options).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        let options = {
          method: 'GET',
          url: recruiterBaseUrl + '/drives' + body[0].id + '/eligibility',
          json: true
        }
        return rp(options)
      }).then(body => {
        expect(typeof body).to.be.oneOf(['array', 'object'])
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
