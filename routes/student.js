export const student = require("express").Router()
const jsonparser = require("body-parser").json()
import { student_controller } from "../modules/student-management/student"
import { student_education_controller } from "../modules/student-management/student_education"
import { student_experience_controller } from "../modules/student-management/student_experience"
import { student_project_controller } from "../modules/student-management/student_project"

export default () => {
  // STUDENT INDEX
  // POST: Adds student's personal info.
  student.route('/', jsonparser)
    .post((req, res) => {
      student_model.add(Object.values(req.body)).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })

  // STUDENT with ID
  // GET: Gets a specific student's info given the student id.
  // DELETE: Deletes a specific student's info given the student id.
  student.route('/:id')
    .get((req, res) => {
      student_model.get_by_id(req.params.id).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    // .delete((req, res) => {
    //   student_model.del(req.params.id)
    //   res.status(200)
    // })

  // EDUCATION with ID
  // POST: Adds student education info with a specific student id.
  // GET: Gets the student's education info given the student id.
  // PUT: Updates the student's education info given the student id.
  student.route('/:studentid/education', jsonparser)
    .get((req, res) => {
      student_education_model.get_by_id(req.params.studentid).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      student_education_model.add(
        req.params.studentid,
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
    // .put((req, res) => {
    //   student_education_model.update(
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
      student_experience_model.get_by_id(req.params.studentid).then((data) => {
        res.status(200).json(data)
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
    })
    .post((req, res) => {
      student_experience_model.add(
        req.params.studentid,
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
    // .put((req, res) => {
    //   student_experience_model.update(
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
        student_project_model.get_by_id(req.params.studentid).then((data) => {
          res.status(200).json(data)
        }).catch((err) => {
          res.status(400).json({
            message: "Bad Request",
            error: err
          })
        })
      })
      .post((req, res) => {
        student_project_model.add(
          req.params.studentid,
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
      // .put((req, res) => {
      //   student_project_model.update(
      //     req.params.studentid,
      //     Object.values(req.body)
      //   )
      //   res.status(200)
      // })
}
