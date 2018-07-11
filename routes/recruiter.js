export const recruiter = require("express").Router()
const jsonparser = require("body-parser").json()
import { validate } from "../config/validator"
import { recruiter_controller } from "../modules/recruiter-management/recruiter"
import { recruiter_hr_controller } from "../modules/recruiter-management/recruiter_hr"
import { recruiter_hr_extra_controller } from "../modules/recruiter-management/recruiter_hr_extra"
import { recruiter_drive_controller } from "../modules/recruiter-management/recruiter_drive"
import { recruiter_drive_round_controller } from "../modules/recruiter-management/recruiter_drive_round"
import { recruiter_drive_eligibility_controller } from "../modules/recruiter-management/recruiter_drive_eligibility/recruiter_drive_eligibility_controller";
import { recruiter_staff_controller } from "../modules/recruiter-management/recruiter_staff/recruiter_staff_controller";

export default () => {
  // HR
  // GET: Gets all the companies' HRs personal info.
  // POST: Posts a specific company's HR personal info.
  recruiter.route('/hr', jsonparser)
    .get(recruiter_hr_controller.get_all)
    .post( validate.recruiter_hr_add, validate.error_handling , recruiter_hr_controller.add)

  // HR with ID
  // GET: Gets a specific HR's personal info.
  // DELETE: Deletes a specific HR's personal info.
  recruiter.route('/hr/:id')
    .get(recruiter_hr_controller.get_by_id)
    .put( validate.recruiter_hr_update ,recruiter_hr_controller.update)

  // HR EXTRA
  // GET: Gets a specific HR's extra info.
  recruiter.route('/hr/:id/extra')
    .get(recruiter_hr_extra_controller.get_by_id)
    .post(recruiter_hr_extra_controller.add)
    .put(recruiter_hr_extra_controller.update)

  // RECRUITER INDEX
  // GET: Gets all the companies' (recruiters') info.
  // POST: Adds a company (recruiter) data.
  recruiter.route('/', jsonparser)
    .get(recruiter_controller.get_all)

  recruiter.route('/old', jsonparser)
    .post(validate.recruiter_add_old, validate.error_handling, recruiter_controller.add_old)

  recruiter.route('/new', jsonparser)
    .post(validate.recruiter_add_new, validate.error_handling, recruiter_controller.add_new)

  recruiter.route('/json', jsonparser)
    .get(recruiter_controller.auto_fill_data)

  // RECRUITER with ID
  // GET: Gets a company's (recruiter's) info.
  // POST: Adds a company's (recruiter's) data.

  // DRIVE
  // POST: Adds a company (recruiter) drive info.


  recruiter.route('/json/drive', jsonparser)
    .get(recruiter_drive_controller.auto_fill_data)

  // RECRUITER DRIVE with ID
  // GET: Gets a specific company's drive info.
  // DELETE: Deletes a company's drive info.
  recruiter.route('/:rid/drives/requested', jsonparser)
    .get(recruiter_drive_controller.get_drives_requested)

  recruiter.route('/:rid/drives/:driveid')
    .get(recruiter_drive_controller.get_by_id)
    .put(recruiter_drive_controller.update)

  recruiter.route('/:rid/staff')
    .get(recruiter_staff_controller.get_all)

  // NOTE: (For routes /:rid/staff/*)
  // THESE ROUTES BELOW NEED A CHECK AS THEY UPDATE DB SOLELY BASED ON THE
  // staff_id PROVIDED, ALTHOUGH THEY ALSO TAKE recruiter_id AS A PARAMETER.
  // recruiter_id CHECK CAN FURTHER BE ADDED TO AVOID UNNECESSARY DISCREPANCIES.
  recruiter.route('/:rid/staff/:staffid/role')
    .put(recruiter_staff_controller.update_role)

  recruiter.route('/:rid/staff/:staffid/status')
    .put(recruiter_staff_controller.update_status)

  // ELIGIBILITY
  recruiter.route('/json/eligibility', jsonparser)
    .get(recruiter_drive_eligibility_controller.auto_fill_data)



  recruiter.route('/drives/:driveid/eligibility', jsonparser)
    .get(recruiter_drive_eligibility_controller.get_all)
    .post(recruiter_drive_eligibility_controller.add)

  recruiter.route('/drives/:driveid/eligibility/:eid', jsonparser)
    .get(recruiter_drive_eligibility_controller.get_by_id)
    .put(recruiter_drive_eligibility_controller.update)

  // DRIVE & ROUND with IDs
  // GET: Gets a specific company's drive's round info.
  // POST: Adds a specific company's drive's round info.
  // DELETE: Deletes a specific company's drive's round info.
  recruiter.route('/json/round')
    .get(recruiter_drive_round_controller.auto_fill_data)

  recruiter.route('/drives/:driveid/rounds', jsonparser)
    .get(recruiter_drive_round_controller.get_all)
    .post(recruiter_drive_round_controller.add)

  recruiter.route('/drives/:driveid/rounds/:roundid', jsonparser)
    .get(recruiter_drive_round_controller.get_by_id)
    .put(recruiter_drive_round_controller.update)

  recruiter.route('/:id')
    .get(recruiter_controller.get_by_id)
    .put(validate.recruiter_update, validate.error_handling,recruiter_controller.update)

  recruiter.route('/:rid/drives', jsonparser)
    .get(recruiter_drive_controller.get_all)
    .post(recruiter_drive_controller.add)
}
