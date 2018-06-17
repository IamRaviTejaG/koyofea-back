export const college = require("express").Router()
const jsonparser = require("body-parser").json()
import { college_model } from "../models/college/college"
import { college_coordinator_model } from "../models/college/college_coordinator"

export default () => {
  // COLLEGE INDEX
  // GET: Gets all the colleges' info.
  // POST: Adds a college's info.
  college.route('/', jsonparser)
    .get((req, res) => {
      let a = college_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      let a = college_model.add(Object.values(req.body))
      res.status(200)
    })

  // COLLEGE with ID
  // GET: Gets a college's info given the college ID.
  // DELETE: Deletes a college's info given the college ID.
  college.route('/:id')
    .get((req, res) => {
      let a = college_model.get_by_id(req.params.id)
      res.status(200)
    })
    .delete((req, res) => {
      let a = college_model.del(req.params.id)
      res.status(200)
    })

  // COORDINATOR with ID
  // GET: Gets a college coordinator's info given the coordinator ID.
  // POST: Adds a college coordinator's info given the coordinator ID.
  // DELETE: Deletes a college coordinator's info given the coordinator ID.
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
