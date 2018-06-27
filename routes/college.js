export const college = require("express").Router()
const jsonparser = require("body-parser").json()
import { college_coordinator_controller } from "../modules/college-management/college_coordinator"
import { college_controller } from "../modules/college-management/college"


export default () => {
  // COLLEGE INDEX
  // GET: Gets all the colleges' info.
  // POST: Adds a college's info.
  college.route('/base', jsonparser)
    .get(college_controller.get_all)
    .post(college_controller.add)

  // COLLEGE with ID
  // GET: Gets a college's info given the college ID.
  // DELETE: Deletes a college's info given the college ID.
  college.route('/base/:id')
    .get(college_controller.get_by_id)
    .put(college_controller.update)

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

}
