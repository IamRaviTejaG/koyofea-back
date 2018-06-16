export const recruiter = require("express").Router()
const jsonparser = require("body-parser").json()
import { recruiter_model } from "../models/recruiter/recruiter"
import { recruiter_hr_model } from "../models/recruiter/recruiter_hr"
import { query } from "./index"

export default () => {
  recruiter.route('/', jsonparser)
    .get((req, res) => {
      let a = recruiter_model.get_all()
      res.status(200).json(a)
    })
    .post((req, res) => {
      let a = recruiter_model.add(Object.values(req.body))
      res.status(200).json(a)
    })

  recruiter.route('/:id')
    .get((req, res) => {
      let a = recruiter_model.get_by_id(req.params.id)
      res.status(200).json(a)
    })
    .delete((req, res) => {
      let a = recruiter_model.del(req.params.id)
      res.status(200).json(a)
    })

  recruiter.route('/hr/', jsonparser)
    .get((req, res) => {
      let a = recruiter_hr_model.get_all()
      res.status(200).json(a)
    })
    .post((req, res) => {
      let a = recruiter_hr_model.add(Object.values(req.body))
      res.status(200).json(a)
    })

  recruiter.route('/hr/:id')
    .get((req, res) => {
      let a = recruiter_hr_model.get_by_id(req.params.id)
      res.status(200).json(a)
    })
    .delete((req, res) => {
      let a = recruiter_hr_model.del(req.params.id)
      res.status(200).json(a)
    })
}
