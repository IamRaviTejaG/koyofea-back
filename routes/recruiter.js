export const recruiter = require("express").Router()
const jsonparser = require("body-parser").json()
import { recruiter_model } from "../models/recruiter/recruiter"
import { recruiter_drive_model } from "../models/recruiter/recruiter_drive"
import { recruiter_drive_round_model } from "../models/recruiter/recruiter_drive_round"
import { recruiter_hr_model } from "../models/recruiter/recruiter_hr"

export default () => {
  // Root index: For recruiter (company) information
  recruiter.route('/', jsonparser)
    .get((req, res) => {
      let a = recruiter_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = recruiter_model.add(Object.values(req.body))
      res.status(200)
    })

  recruiter.route('/:id')
    .get((req, res) => {
      let a = recruiter_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_model.del(req.params.id)
      res.status(200)
    })

  // Drive: For recruitment drives' information
  recruiter.route('/drive', jsonparser)
    .post((req, res) => {
      let a = recruiter_drive_model.add(Object.values(req.body))
      res.status(200)
    })

  recruiter.route('/drive/:id')
    .get((req, res) => {
      let a = recruiter_drive_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = recruiter_drive_model.del(req.params.id)
      res.status(200)
    })

  // Drive_Round: For recruiterment drive rounds' information
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

  // hr: For recruiter (personal) information
  recruiter.route('/hr', jsonparser)
    .get((req, res) => {
      let a = recruiter_hr_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = recruiter_hr_model.add(Object.values(req.body))
      res.status(200)
    })

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
