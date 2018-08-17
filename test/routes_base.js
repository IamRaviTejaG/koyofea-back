const dotenv = require('dotenv').config()
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const baseRouteUrl = serverBaseUrl + '/'

describe('6. TESTING BASE ROUTES', () => {
  describe('4.1. /duration', () => {
    it('Should return duration autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/duration',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.2. /eligibility', () => {
    it('Should return eligibility autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/eligibility',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.3. /employment', () => {
    it('Should return employment autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/employment',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.4. /gender', () => {
    it('Should return gender autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/industry',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.5. /grade-scale', () => {
    it('Should return grade scale autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/grade-scale',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.6. /industry', () => {
    it('Should return industry autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/industry',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.7. /job', () => {
    it('Should return job autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/job',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.8. /major', () => {
    it('Should return major autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/major',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.9. /positions', () => {
    it('Should return positions autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/positions',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.10. /schools', () => {
    it('Should return schools autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/schools',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.11. /colleges', () => {
    it('Should return colleges autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/colleges',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.12. /programs', () => {
    it('Should return programs autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/programs',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.13. /designations', () => {
    it('Should return designations autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/designations',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })

  describe('4.14. /organizations', () => {
    it('Should return organizations autofill', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/organizations',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.data).to.be.an('array')
        expect(body.data).to.have.lengthOf.above(0)
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
