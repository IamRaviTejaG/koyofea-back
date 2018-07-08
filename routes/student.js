export const student = require("express").Router()
const jsonparser = require("body-parser").json()
import { student_controller } from "../modules/student-management/student"
import { student_education_controller } from "../modules/student-management/student_education"
import { student_experience_controller } from "../modules/student-management/student_experience"
import { student_project_controller } from "../modules/student-management/student_project"

export default () => {
  // STUDENT INDEX
  // POST: Adds student's personal info.
  // GET: Gets all the student's data.
  student.route('/')
    .post(student_controller.add_new)

  // STUDENT with ID
  // GET: Gets a specific student's info given the student id.
  // DELETE: Deletes a specific student's info given the student id.
  student.route('/:id')
    .get(student_controller.get_by_id)
    .put(student_controller.update)

  // EDUCATION with ID
  // POST: Adds student education info with a specific student id.
  // GET: Gets the student's education info given the student id.
  // PUT: Updates the student's education info given the student id.
  student.route('/:studentid/education')
    .get(student_education_controller.get_by_id)
    .post(student_education_controller.add_new)
    .put(student_education_controller.update)

  // EXPERIENCE with ID
  // POST: Adds student experience info with a specific student id.
  // GET: Gets the student's experience info given the student id.
  // PUT: Updates the student's experience info given the student id.
  student.route('/:studentid/experience')
    .get(student_experience_controller.get_by_id)
    .post(student_experience_controller.add_new)
    .put(student_experience_controller.update)

  // PROJECTS with ID
  // POST: Adds student project info with a specific student id.
  // GET: Gets the student's project info given the student id.
  // PUT: Updates the student's project info given the student id.
  student.route('/:studentid/projects')
    .get(student_project_controller.get_by_id)
    .post(student_project_controller.add_new)
    .put(student_project_controller.update)
}
