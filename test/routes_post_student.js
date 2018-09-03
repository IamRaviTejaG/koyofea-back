import { auth } from '../config/auth'
const rp = require('request-promise')

// Chai and related imports
const chai = require('chai')
const expect = chai.expect

require('dotenv').config()

// Testing constants, do not alter.
const serverBaseUrl = 'http://localhost:' + process.env.TEST_PORT + '/api'
const studentBaseUrl = serverBaseUrl + '/student'

describe('11. POST: STUDENT ROUTES', () => {
  describe('11.1. /<education, experience, projects>', () => {
    it('Should add a new student\'s info to the DB', done => {
      let date = (new Date()).toISOString().slice(0, 10)
      let options = {
        method: 'POST',
        url: studentBaseUrl + '/',
        body: {
          first_name: 'TEST',
          last_name: 'STUDENT',
          email: 'student@test.com',
          dob: date,
          mobile: '111',
          linkedin: 0,
          college_id: 11,
          gender_id: 1,
          verified: 0,
          created_date: date
        },
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Successfully added!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Should add a new student\'s education info to the DB', done => {
      let date = (new Date()).toISOString().slice(0, 10)
      let options = {
        method: 'POST',
        url: studentBaseUrl + '/3/education',
        body: {
          x_school: "TEST",
          x_board: "TEST",
          x_grade_scale_id: 1,
          x_mark: 10,
          x_end: date,
          xii_school: "TEST",
          xii_board: "TEST",
          xii_grade_scale_id: 2,
          xii_stream: "TEST",
          xii_mark: 95,
          xii_end: date,
          grad_school: "TEST",
          grad_program_id: 1,
          grad_major_id: 1,
          grad_grade_scale_id: 1,
          grad_mark: 9,
          grad_start: date,
          grad_end: date,
          student_id: 3
        },
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Added successfully!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Should add a new student\'s experience info to the DB', done => {
      let date = (new Date()).toISOString().slice(0, 10)
      let options = {
        method: 'POST',
        url: studentBaseUrl + '/3/experience',
        body: [{
          start_date: date,
          end_date: date,
          designation: 'TESTER',
          description: 'TESTING IF EVERTHING WORKS FINE',
          student_id: 3,
          organization_name: 'MOCHA & CHAI'
        }],
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Successfully added!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    }),
    it('Should add a new student\'s project info to the DB', done => {
      let date = (new Date()).toISOString().slice(0, 10)
      let options = {
        method: 'POST',
        url: studentBaseUrl + '/3/experience',
        body: [{
          name: 'MOCHA & CHAI',
          description: 'TESTING IF EVERTHING WORKS FINE',
          student_id: 3,
          start_date: date,
          end_date: date
        }],
        json: true
      }
      rp(options).then(body => {
        expect(body).to.be.an('object')
        expect(body.message).to.equal('Added successfully!')
        expect(200)
        done()
      }).catch(err => {
        done(err)
      })
    })
  })
})
