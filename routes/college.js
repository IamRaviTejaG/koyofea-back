import {
  collegeController,
  collegeCoordinatorController,
  collegeDrivesController,
  collegeRecruiterController,
  collegeRoleController,
  collegeStaffController,
  collegeStudentController
} from '../modules/college-management'
export const college = require('express').Router()
const jsonparser = require('body-parser').json()
// import { collegeController } from "../modules/college-management/college"
// import { college_coordinatorController } from "../modules/college-management/college_coordinator"
// import { college_drivesController } from "../modules/college-management/college_drives"
// import { college_roleController } from "../modules/college-management/college_role"
// import { college_staffController } from "../modules/college-management/college_staff"
// import { college_studentController } from "../modules/college-management/college_student"
// import { college_recruiterController } from "../modules/college-management/college_recruiter/college_recruiterController";

export default () => {
  // COLLEGE INDEX
  // GET: Gets all the colleges' info.
  // POST: Adds a college's info.
  college.route('/', jsonparser)
    .get(collegeController.get_all)

  /* UPDATE DATE: 04 August 2018
  NOTE: DEPRECATED ROUTES
  // college.route('/new', jsonparser)
  //   .post(collegeController.add_new)
  //
  // college.route('/old', jsonparser)
  //   .post(collegeController.add_old)
  //
  // college.route('/json', jsonparser)
  //   .get(collegeController.auto_fill_data)
  */

  college.route('/role')
    .get(collegeRoleController.get_all)

  college.route('/coordinator', jsonparser)
    .get(collegeCoordinatorController.get_all)
    .post(collegeCoordinatorController.add)

  // COORDINATOR with ID
  // GET: Gets a college coordinator's info given the coordinator ID.
  // POST: Adds a college coordinator's info given the coordinator ID.
  // DELETE: Deletes a college coordinator's info given the coordinator ID.
  college.route('/coordinator/:coordinatorid', jsonparser)
    .get(collegeCoordinatorController.get_by_id)
    .put(collegeCoordinatorController.update)

  college.route('/:collegeid/drives')
    .get(collegeDrivesController.get_all)

  college.route('/:collegeid/recruiters')
    .get(collegeRecruiterController.get_all)

  college.route('/:collegeid/students')
    .get(collegeStudentController.get_all)

  college.route('/:collegeid/students/:studentid/status')
    .put(collegeStudentController.update_status)

  // COLLEGE with ID
  // GET: Gets a college's info given the college ID.
  // DELETE: Deletes a college's info given the college ID.
  college.route('/:collegeid')
    .get(collegeController.get_by_id)
    .put(collegeController.update)

  college.route('/:collegeid/staff')
    .get(collegeStaffController.get_all)

  // NOTE: (For routes /:collegeid/staff/*)
  // THESE ROUTES BELOW NEED A CHECK AS THEY UPDATE DB SOLELY BASED ON THE
  // staff_id PROVIDED, ALTHOUGH THEY ALSO TAKE college_id AS A PARAMETER.
  // college_id CHECK CAN FURTHER BE ADDED TO AVOID UNNECESSARY DISCREPANCIES.

  college.route('/:collegeid/staff/:staffid/role')
    .put(collegeStaffController.update_role)

  college.route('/:collegeid/staff/:staffid/status')
    .put(collegeStaffController.update_status)
}
