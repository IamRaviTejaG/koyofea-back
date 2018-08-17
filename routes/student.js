import {
  studentController,
  studentEducationController,
  studentExperienceController,
  studentProjectController
} from '../modules/student-management'
export const student = require('express').Router()
// import { studentController } from "../modules/student-management/student"
// import { studentEducationController } from "../modules/student-management/student_education"
// import { studentExperienceController } from "../modules/student-management/student_experience"
// import { studentProjectController } from "../modules/student-management/student_project"

export default () => {
  // STUDENT INDEX
  // POST: Adds student's personal info.
  // GET: Gets all the student's data.
  student.route('/').post(studentController.add_new)

  // STUDENT with ID
  // GET: Gets a specific student's info given the student id.
  // DELETE: Deletes a specific student's info given the student id.
  student
    .route('/:studentid')
    .get(studentController.get_by_id)
    .put(studentController.update)

  // EDUCATION with ID
  // POST: Adds student education info with a specific student id.
  // GET: Gets the student's education info given the student id.
  // PUT: Updates the student's education info given the student id.
  student
    .route('/:studentid/education')
    .get(studentEducationController.get)
    .post(studentEducationController.add_new)
    .put(studentEducationController.update)

  // EXPERIENCE with ID
  // POST: Adds student experience info with a specific student id.
  // GET: Gets the student's experience info given the student id.
  // PUT: Updates the student's experience info given the student id.
  student
    .route('/:studentid/experience')
    .get(studentExperienceController.get_all)
    .post(studentExperienceController.add_new)
    .put(studentExperienceController.update)

  // PROJECTS with ID
  // POST: Adds student project info with a specific student id.
  // GET: Gets the student's project info given the student id.
  // PUT: Updates the student's project info given the student id.
  student
    .route('/:studentid/projects')
    .get(studentProjectController.get_all)
    .post(studentProjectController.add_new)
  // .put(studentProjectController.update)
}
