import { recruiter_drive_model } from "./recruiter_drive_model"
import { query } from "../../../config/db";



export let recruiter_drive_controller = {
  get_all: (req,res) => {
    // TODO: with admin panel
    recruiter_drive_model.get_all(req).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  add: (req, res) => { 
    // Check if email is verified before entering data
    recruiter_drive_model.add(req)
    .then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })  
  },

  get_by_id: (req, res) => {
      // Get data by id
      recruiter_drive_model.get_by_id(req.params.id).then(drives => {
        // If request id and users id doesn't match throw
        res.status(200).json(drives)
      }).catch((err) => {
        res.status(400).json({ message: "Bad Request", error: err })
      })
  
  },
  
  update: (req, res) => {  
    // Get data by id
    recruiter_drive_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw

      res.status(200).json({message: "Updated Successfully", err: {}})
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
