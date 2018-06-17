export const recruiter = require("express").Router()
const jsonparser = require("body-parser").json()
import { recruiter_model } from "../models/recruiter/recruiter"
import { recruiter_drive_model } from "../models/recruiter/recruiter_drive"
import { recruiter_drive_round_model } from "../models/recruiter/recruiter_drive_round"
import { recruiter_hr_model } from "../models/recruiter/recruiter_hr"

export default () => {
  // RECRUITER INDEX
  // GET: Gets all the companies' (recruiters') info.
  // POST: Adds a company (recruiter) data.
  recruiter.route('/', jsonparser)
    .get((req, res) => {
      let a = recruiter_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = recruiter_model.add(Object.values(req.body))
      res.status(200)
    })

  // RECRUITER with ID
  // GET: Gets a company's (recruiter's) info.
  // POST: Adds a company's (recruiter's) data.
  // DELETE: Deletes a company's (recruiter's) data.
  recruiter.route('/:id')
    .get((req, res) => {
      let a = recruiter_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_model.del(req.params.id)
      res.status(200)
    })

  // DRIVE
  // POST: Adds a company (recruiter) drive info.
  recruiter.route('/drive', jsonparser)
    .post((req, res) => {
      let a = recruiter_drive_model.add(Object.values(req.body))
      res.status(200)
    })

  // RECRUITER DRIVE with ID
  // GET: Gets a specific company's drive info.
  // DELETE: Deletes a company's drive info.
  recruiter.route('/drive/:id')
    .get((req, res) => {
      let a = recruiter_drive_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_drive_model.del(req.params.id)
      res.status(200)
    })

  // DRIVE & ROUND with IDs
  // GET: Gets a specific company's drive's round info.
  // POST: Adds a specific company's drive's round info.
  // DELETE: Deletes a specific company's drive's round info.
  recruiter.route('/drive/:driveid/round/:roundid', jsonparser)
    .get((req, res) => {
      let a = recruiter_drive_round_model.get_by_id(
        req.params.driveid,
        req.params.roundid
      )
      res.status(200)
    })
    .post((req, res) => {
      let a = recruiter_drive_round_model.add(
        req.params.driveid,
        req.params.roundid,
        Object.values(req.body)
      )
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_drive_round_model.del(
        req.params.driveid,
        req.params.roundid
      )
      res.status(200)
    })

  // HR
  // GET: Gets all the companies' HRs personal info.
  // POST: Posts a specific company's HR personal info.
  recruiter.route('/hr', jsonparser)
    .get((req, res) => {
      let a = recruiter_hr_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = recruiter_hr_model.add(Object.values(req.body))
      res.status(200)
    })

  // HR with ID
  // GET: Gets a specific HR's personal info.
  // DELETE: Deletes a specific HR's personal info.
  recruiter.route('/hr/:id')
    .get((req, res) => {
      let a = recruiter_hr_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_hr_model.del(req.params.id)
      res.status(200)
    })
}
