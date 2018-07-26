import { student_experience_model } from "./student_experience_model"
import { query } from "../../../config/db"
import { auto_fill, fun } from "../../common"

export let student_experience_controller = {
  get_all: (req, res) => {
    student_experience_model.get_by_id(req.params.studentid).then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: "Bad Request!", error: err})
    })
  },

  // TESTING PENDING for the routes below.
  // ^ Status as on 26th July 2018.
  add_new: (req, res) => {
    let fun = (data) => {
      data.student_id = req.basic_data.student_id
      return student_experience_model.add_new(data)
    }
    let experience = req.body.map(fun)
    Promise.all(experience).then(data => {
      res.status(200).json({message: "Successfully added!", error: null})
    }).catch(err => {
      res.status(400).json({message: "Bad Request!", error: err})
    })
  },

  update: (req, res) => {
    student_experience_model.update(req.params.studentid, req.body)
    .then(data => {
      res.status(200).json(req.body)
    }).catch(err => {
      res.status(400).json({message: "Bad Request!", error: err})
    })
  }
}
