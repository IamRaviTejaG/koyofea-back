import { validate } from '../config/validator'
import {
  recruiterController,
  recruiterCollegeController,
  recruiterDriveController,
  recruiterDriveEligibilityController,
  recruiterDriveRoundController,
  recruiterHrController,
  recruiterHrExtraController,
  recruiterStaffController
} from '../modules/recruiter-management'
export const recruiter = require('express').Router()
const jsonparser = require('body-parser').json()

export default () => {
  // HR
  // GET: Gets all the companies' HRs personal info.
  // POST: Posts a specific company's HR personal info.
  recruiter
    .route('/hr', jsonparser)
    .get(recruiterHrController.get_all)
    .post(
      validate.recruiter_hr_add,
      validate.error_handling,
      recruiterHrController.add
    )

  // HR with ID
  // GET: Gets a specific HR's personal info.
  // DELETE: Deletes a specific HR's personal info.
  recruiter
    .route('/hr/:id')
    .get(recruiterHrController.get_by_id)
    .put(validate.recruiter_hr_update, recruiterHrController.update)

  // HR EXTRA
  // GET: Gets a specific HR's extra info.
  recruiter
    .route('/hr/:id/extra')
    .get(recruiterHrExtraController.get_by_id)
    .post(recruiterHrExtraController.add)
    .put(recruiterHrExtraController.update)

  // RECRUITER INDEX
  // GET: Gets all the companies' (recruiters') info.
  // POST: Adds a company (recruiter) data.
  recruiter.route('/', jsonparser).get(recruiterController.get_all)

  /* UPDATE DATE: 04 August 2018
  NOTE: DEPRECATED ROUTES

  // recruiter
  //   .route("/old", jsonparser)
  //   .post(
  //     validate.recruiter_add_old,
  //     validate.error_handling,
  //     recruiterController.add_old
  //   );
  //
  // recruiter
  //   .route("/new", jsonparser)
  //   .post(
  //     validate.recruiter_add_new,
  //     validate.error_handling,
  //     recruiterController.add_new
  //   );
  //
  // recruiter.route("/json", jsonparser).get(recruiterController.auto_fill_data);
  //
  // // RECRUITER with ID
  // // GET: Gets a company's (recruiter's) info.
  // // POST: Adds a company's (recruiter's) data.
  //
  // // DRIVE
  // // POST: Adds a company (recruiter) drive info.
  //
  // recruiter
  //   .route("/json/drive", jsonparser)
  //   .get(recruiterDriveController.auto_fill_data);

  // ELIGIBILITY
  // recruiter
  //   .route("/json/eligibility", jsonparser)
  //   .get(recruiterDriveEligibilityController.auto_fill_data);

  // recruiter
  //   .route("/json/round")
  //   .get(recruiterDriveRoundController.auto_fill_data);

  */

  // RECRUITER DRIVE with ID
  // GET: Gets a specific company's drive info.
  // DELETE: Deletes a company's drive info.
  recruiter
    .route('/:rid/drives/requested', jsonparser)
    .get(recruiterDriveController.get_drives_requested)

  recruiter
    .route('/:rid/drives/:driveid')
    .get(recruiterDriveController.get_by_id)
    .put(recruiterDriveController.update)

  recruiter.route('/:rid/staff').get(recruiterStaffController.get_all)

  // NOTE: (For routes /:rid/staff/*)
  // THESE ROUTES BELOW NEED A CHECK AS THEY UPDATE DB SOLELY BASED ON THE
  // staff_id PROVIDED, ALTHOUGH THEY ALSO TAKE recruiter_id AS A PARAMETER.
  // recruiter_id CHECK CAN FURTHER BE ADDED TO AVOID UNNECESSARY DISCREPANCIES.
  recruiter
    .route('/:rid/staff/:staffid/role')
    .put(recruiterStaffController.update_role)

  recruiter
    .route('/:rid/staff/:staffid/status')
    .put(recruiterStaffController.update_status)

  recruiter
    .route('/drives/:driveid/eligibility', jsonparser)
    .get(recruiterDriveEligibilityController.get_all)
    .post(recruiterDriveEligibilityController.add)

  recruiter
    .route('/drives/:driveid/eligibility/:eid', jsonparser)
    .get(recruiterDriveEligibilityController.get_by_id)
    .put(recruiterDriveEligibilityController.update)

  // DRIVE & ROUND with IDs
  // GET: Gets a specific company's drive's round info.
  // POST: Adds a specific company's drive's round info.
  // DELETE: Deletes a specific company's drive's round info.

  recruiter
    .route('/drives/:driveid/rounds', jsonparser)
    .get(recruiterDriveRoundController.get_all)
    .post(recruiterDriveRoundController.add)

  recruiter
    .route('/drives/:driveid/rounds/:roundid', jsonparser)
    .get(recruiterDriveRoundController.get_by_id)
    .put(recruiterDriveRoundController.update)

  recruiter
    .route('/:id')
    .get(recruiterController.get_by_id)
    .put(
      validate.recruiter_update,
      validate.error_handling,
      recruiterController.update
    )

  recruiter
    .route('/:recruiterid/colleges')
    .get(recruiterCollegeController.get_all)

  recruiter
    .route('/:rid/drives', jsonparser)
    .get(recruiterDriveController.get_all)
    .post(recruiterDriveController.add)
}
