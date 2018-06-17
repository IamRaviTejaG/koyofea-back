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
      recruiter_model.get_all()
      res.status(200)
    })
    .post((req, res) => {
      recruiter_model.add(Object.values(req.body))
      res.status(200)
    })

  // RECRUITER with ID
  // GET: Gets a company's (recruiter's) info.
  // POST: Adds a company's (recruiter's) data.
  // DELETE: Deletes a company's (recruiter's) data.
  recruiter.route('/:id')
    .get((req, res) => {
      recruiter_model.get_by_id(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
<<<<<<< HEAD
        res.status(300).json({message: "Something went wrond", error:err})
=======
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
>>>>>>> 4ca33feb848aef5f9e20e313c0689b16193d3a71
      })
    })
    .delete((req, res) => {
      recruiter_model.del(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // DRIVE
  // POST: Adds a company (recruiter) drive info.
  recruiter.route('/drive', jsonparser)
    .post((req, res) => {
      recruiter_drive_model.add(Object.values(req.body)).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // RECRUITER DRIVE with ID
  // GET: Gets a specific company's drive info.
  // DELETE: Deletes a company's drive info.
  recruiter.route('/drive/:id')
    .get((req, res) => {
      recruiter_drive_model.get_by_id(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .delete((req, res) => {
      recruiter_drive_model.del(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // DRIVE & ROUND with IDs
  // GET: Gets a specific company's drive's round info.
  // POST: Adds a specific company's drive's round info.
  // DELETE: Deletes a specific company's drive's round info.
  recruiter.route('/drive/:driveid/round/:roundid', jsonparser)
    .get((req, res) => {
      recruiter_drive_round_model.get_by_id(
        req.params.driveid,
        req.params.roundid
      ).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      recruiter_drive_round_model.add(
        req.params.driveid,
        req.params.roundid,
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
      recruiter_drive_round_model.del(
        req.params.driveid,
        req.params.roundid
      ).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // HR
  // GET: Gets all the companies' HRs personal info.
  // POST: Posts a specific company's HR personal info.
  recruiter.route('/hr', jsonparser)
    .get((req, res) => {
      recruiter_hr_model.get_all().then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      recruiter_hr_model.add(Object.values(req.body)).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // HR with ID
  // GET: Gets a specific HR's personal info.
  // DELETE: Deletes a specific HR's personal info.
  recruiter.route('/hr/:id')
    .get((req, res) => {
      recruiter_hr_model.get_by_id(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .delete((req, res) => {
      recruiter_hr_model.del(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
}
