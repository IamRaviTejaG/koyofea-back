const dotenv = require('dotenv').config()
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const autofillRouteUrl = serverBaseUrl + '/autofill'
const autofillCollectionUrl = serverBaseUrl + '/autofill-collections'

describe('4. TESTING AUTOFILL ROUTES', () => {
  describe('4.1. Should return different autofill data', () => {
    it('/duration', done => {
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
    }),
    it('/eligibility', done => {
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
    }),
    it('/employment', done => {
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
    }),
    it('/gender', done => {
      let options = {
        method: 'GET',
        url: autofillRouteUrl + '/gender',
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
    }),
    it('/grade-scale', done => {
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
    }),
    it('/industry', done => {
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
    }),
    it('/job', done => {
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
    }),
    it('/major', done => {
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
    }),
    it('/positions', done => {
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
    }),
    it('/schools', done => {
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
    }),
    it('/colleges', done => {
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
    }),
    it('/programs', done => {
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
    }),
    it('/designations', done => {
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
    }),
    it('/organizations', done => {
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
  describe('4.2. Should return autofill collections data', () => {
    it('/education', done => {
      let options = {
        method: 'GET',
        url: autofillCollectionUrl + '/education',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('/experience', done => {
      let options = {
        method: 'GET',
        url: autofillCollectionUrl + '/experience',
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
