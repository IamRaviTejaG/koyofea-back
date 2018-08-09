import { student_project_model } from "./student_project_model";
import { query } from "../../../config/db";
import { auto_fill, fun } from "../../common";

export let student_project_controller = {
  get_all: (req, res) => {
    student_project_model.get_all(req.params.studentid).then(projects => {
      res.status(200).json(projects)
    }).catch(err => {
      res.status(400).json({message: "Bad Request!", error: err})
    })
  },

  // get_by_id: (req, res) => {
  //   student_project_model
  //     .get_by_id(req.params.studentid)
  //     .then(users => {
  //       res.status(200).json(users)
  //     })
  //     .catch(err => {
  //       res.status(400).json({ message: "Bad Request!", error: err })
  //     })
  // },

  // TESTING PENDING for the routes below.
  // ^ Status as on 26th July 2018.
  add_new: (req, res) => {
    let fun = data => {
      data.student_id = req.basic_data.student_id
      return student_project_model.add_new(req.params.studentid, data)
    }
    let projects = req.body.map(fun)
    Promise.all(projects).then(data => {
      res.status(200).json({message: "Added successfully!", error: null})
    }).catch(err => {
      res.status(400).json({message: "Bad Request!", error: err})
    })
  }

  // update: (req, res) => {
  //   student_project_model
  //     .update(req.params.studentid, req.body)
  //     .then(data => {
  //       res.status(200).json(req.body)
  //     })
  //     .catch(err => {
  //       res.status(400).json({ message: "Bad Request!", error: err })
  //     })
  // }
}
