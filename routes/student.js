export const student = require("express").Router()
const jsonparser = require("body-parser").json()
import { student_model } from "../models/student/student"
import { student_education_model } from "../models/student/student_education"
import { student_experience_model } from "../models/student/student_experience"
import { student_project_model } from "../models/student/student_project"

export default () => {
  // STUDENT INDEX
  // POST: Adds student's personal info.
  student.route('/', jsonparser)
    .post((req, res) => {
      let a = student_model.add(Object.values(req.body))
      res.status(200)
    })

  // STUDENT with ID
  // GET: Gets a specific student's info given the student id.
  // DELETE: Deletes a specific student's info given the student id.
  student.route('/:id')
    .get((req, res) => {
      let a = student_model.get_by_id(req.params.id)
      res.status(200)
    })
    // .delete((req, res) => {
    //   let a = student_model.del(req.params.id)
    //   res.status(200)
    // })

  // EDUCATION with ID
  // POST: Adds student education info with a specific student id.
  // GET: Gets the student's education info given the student id.
  // PUT: Updates the student's education info given the student id.
  student.route('/:studentid/education', jsonparser)
    .get((req, res) => {
      let a = student_education_model.get_by_id(req.params.studentid)
      res.status(200)
    })
    .post((req, res) => {
      let a = student_education_model.add(
        req.params.studentid,
        Object.values(req.body)
      )
      res.status(200)
    })
    // .put((req, res) => {
    //   let a = student_education_model.update(
    //     req.params.studentid,
    //     Object.values(req.body)
    //   )
    //   res.status(200)
    // })

  // EXPERIENCE with ID
  // POST: Adds student experience info with a specific student id.
  // GET: Gets the student's experience info given the student id.
  // PUT: Updates the student's experience info given the student id.
  student.route('/:studentid/experience', jsonparser)
    .get((req, res) => {
      let a = student_experience_model.get_by_id(req.params.studentid)
      res.status(200)
    })
    .post((req, res) => {
      let a = student_experience_model.add(
        req.params.studentid,
        Object.values(req.body)
      )
      res.status(200)
    })
    // .put((req, res) => {
    //   let a = student_experience_model.update(
    //     req.params.studentid,
    //     Object.values(req.body)
    //   )
    //   res.status(200)
    // })

    // PROJECTS with ID
    // POST: Adds student project info with a specific student id.
    // GET: Gets the student's project info given the student id.
    // PUT: Updates the student's project info given the student id.
    student.route('/:studentid/projects', jsonparser)
      .get((req, res) => {
        let a = student_project_model.get_by_id(req.params.studentid)
        res.status(200)
      })
      .post((req, res) => {
        let a = student_project_model.add(
          req.params.studentid,
          Object.values(req.body)
        )
        res.status(200)
      })
      // .put((req, res) => {
      //   let a = student_project_model.update(
      //     req.params.studentid,
      //     Object.values(req.body)
      //   )
      //   res.status(200)
      // })
}
