import { query } from "../../../config/db";
import { recruiter_staff_model } from "./recruiter_staff_model";

export let recruiter_staff_controller = {
  get_all: (req, res) => {
    recruiter_staff_model.get_all(req.params.rid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  update_role: (req, res) => {
    recruiter_staff_model.update_role(req).then(data => {
      console.log(data)
      res.status(200).json({
        message: "Updated role for staffid: " + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  },

  update_status: (req, res) => {
    recruiter_staff_model.update_status(req).then(data => {
      res.status(200).json({
        message: "Updated status for staffid: " + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  }
}
