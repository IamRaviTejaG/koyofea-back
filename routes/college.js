export const college = require("express").Router()
const jsonparser = require("body-parser").json()
import { college_controller } from "../modules/college-management/college"
import { college_coordinator_controller } from "../modules/college-management/college_coordinator"
import { college_drives_controller } from "../modules/college-management/college_drives"
import { college_role_controller } from "../modules/college-management/college_role"
import { college_staff_controller } from "../modules/college-management/college_staff"
import { college_student_controller } from "../modules/college-management/college_student"

export default () => {
  // COLLEGE INDEX
  // GET: Gets all the colleges' info.
  // POST: Adds a college's info.
  college.route('/', jsonparser)
    .get(college_controller.get_all)

  college.route('/new', jsonparser)
    .post(college_controller.add_new)

  college.route('/old', jsonparser)
    .post(college_controller.add_old)

  college.route('/json', jsonparser)
    .get(college_controller.auto_fill_data)

  college.route('/role')
    .get(college_role_controller.get_all)

  college.route('/coordinator', jsonparser)
    .get(college_coordinator_controller.get_all)
    .post(college_coordinator_controller.add)

  // COORDINATOR with ID
  // GET: Gets a college coordinator's info given the coordinator ID.
  // POST: Adds a college coordinator's info given the coordinator ID.
  // DELETE: Deletes a college coordinator's info given the coordinator ID.
  college.route('/coordinator/:id', jsonparser)
    .get(college_coordinator_controller.get_by_id)
    .put(college_coordinator_controller.update)

  college.route('/:collegeid/drives')
    .get(college_drives_controller.get_all)

  college.route('/:collegeid/students')
    .get(college_student_controller.get_all)

  college.route('/:collegeid/students/:studentid/status')
    .put(college_student_controller.update_status)

  // COLLEGE with ID
  // GET: Gets a college's info given the college ID.
  // DELETE: Deletes a college's info given the college ID.
  college.route('/:id')
    .get(college_controller.get_by_id)
    .put(college_controller.update)

  college.route('/:collegeid/staff')
    .get(college_staff_controller.get_all)

  // NOTE: (For routes /:collegeid/staff/*)
  // THESE ROUTES BELOW NEED A CHECK AS THEY UPDATE DB SOLELY BASED ON THE
  // staff_id PROVIDED, ALTHOUGH THEY ALSO TAKE college_id AS A PARAMETER.
  // college_id CHECK CAN FURTHER BE ADDED TO AVOID UNNECESSARY DISCREPANCIES.

  college.route('/:collegeid/staff/:staffid/role')
    .put(college_staff_controller.update_role)

  college.route('/:collegeid/staff/:staffid/status')
    .put(college_staff_controller.update_status)
}
