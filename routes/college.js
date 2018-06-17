export const college = require("express").Router()
const jsonparser = require("body-parser").json()
import { college_model } from "../models/college/college"
import { college_coordinator_model } from "../models/college/college_coordinator"

export default () => {
  // Root index: For college (company) information
  college.route('/', jsonparser)
    .get((req, res) => {
      let a = college_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = college_model.add(Object.values(req.body))
      res.status(200)
    })

  college.route('/:id')
    .get((req, res) => {
      let a = college_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = college_model.del(req.params.id)
      res.status(200)
    })

  college.route('/coordinator/:coordinatorid', jsonparser)
    .get((req, res) => {
      let a = college_coordinator_model.get_by_id(req.params.coordinatorid)
      res.status(200)
    })
    .post((req, res) => {
      let a = college_coordinator_model.add(
        req.params.coordinatorid,
        Object.values(req.body)
      )
      res.status(200)
    })
    .delete((req, res) => {
      let a = college_coordinator_model.del(req.params.coordinatorid)
      res.status(200)
    })
}
