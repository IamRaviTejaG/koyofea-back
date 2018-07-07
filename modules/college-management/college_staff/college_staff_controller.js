import { query } from "../../../config/db";
import { college_staff_model } from "./college_staff_model";

export let college_staff_controller = {
  get_all: (req, res) => {
    college_staff_model.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  update_role: (req, res) => {
    college_staff_model.update_role(req).then(data => {
      res.status(200).json({
        message: "Updated role for staffid: " + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  },

  update_status: (req, res) => {
    college_staff_model.update_status(req).then(data => {
      res.status(200).json({
        message: "Updated status for staffid: " + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  }
}
