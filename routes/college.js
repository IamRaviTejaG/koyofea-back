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
      college_model.get_all().then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      college_model.add(Object.values(req.body)).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // COLLEGE with ID
  // GET: Gets a college's info given the college ID.
  // DELETE: Deletes a college's info given the college ID.
  college.route('/:id')
    .get((req, res) => {
      college_model.get_by_id(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .delete((req, res) => {
      college_model.del(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // COORDINATOR with ID
  // GET: Gets a college coordinator's info given the coordinator ID.
  // POST: Adds a college coordinator's info given the coordinator ID.
  // DELETE: Deletes a college coordinator's info given the coordinator ID.
  college.route('/coordinator/:coordinatorid', jsonparser)
    .get((req, res) => {
      college_coordinator_model.get_by_id(req.params.coordinatorid).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      college_coordinator_model.add(
        req.params.coordinatorid,
        Object.values(req.body)
      ).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .delete((req, res) => {
      college_coordinator_model.del(req.params.coordinatorid).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
}