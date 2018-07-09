import { query } from "../../../config/db";
import { college_student_model } from "./college_student_model";

export let college_student_controller = {
  get_all: (req, res) => {
    college_student_model.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  update_status: (req, res) => {
    college_student_model.update_status(req).then(data => {
      res.status(200).json({
        message: "Updated status for studentid: " + req.params.studentid})
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  }
}
