export const recruiter = require("express").Router()
const jsonparser = require("body-parser").json()
import { validate } from "../config/validator"
import { recruiter_hr_controller } from "../modules/recruiter-management/recruiter_hr"
import { recruiter_controller } from "../modules/recruiter-management/recruiter"
import { recruiter_hr_extra_controller } from "../modules/recruiter-management/recruiter_hr_extra"
import { recruiter_drive_controller } from "../modules/recruiter-management/recruiter_drive"
import { recruiter_drive_round_controller } from "../modules/recruiter-management/recruiter_drive_round"



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
  recruiter.route('/base/', jsonparser)
    .get(recruiter_controller.get_all)
    .post( validate.recruiter_add , recruiter_controller.add)

  recruiter.route('/base/get-name', jsonparser)
    .get(recruiter_controller.get_all_name)
    
  // RECRUITER with ID
  // GET: Gets a company's (recruiter's) info.
  // POST: Adds a company's (recruiter's) data.
  recruiter.route('/base/:id')
    .get(recruiter_controller.get_by_id)
    .put(validate.recruiter_update, recruiter_controller.update)

  // DRIVE
  // POST: Adds a company (recruiter) drive info.
  recruiter.route('/drives', jsonparser)
    .get(recruiter_drive_controller.get_all)
    .post(recruiter_drive_controller.add)

  // RECRUITER DRIVE with ID
  // GET: Gets a specific company's drive info.
  // DELETE: Deletes a company's drive info.
  recruiter.route('/drives/:id')
    .get(recruiter_drive_controller.get_by_id)
    .put(recruiter_drive_controller.update)

  // DRIVE & ROUND with IDs
  // GET: Gets a specific company's drive's round info.
  // POST: Adds a specific company's drive's round info.
  // DELETE: Deletes a specific company's drive's round info.
  recruiter.route('/drive/:driveid/round', jsonparser)
    .get(recruiter_drive_round_controller.get_all)  
    .post(recruiter_drive_round_controller.add)
    
  recruiter.route('/drive/:driveid/round/:roundid', jsonparser)
    .get(recruiter_drive_round_controller.get_by_id)
    .put(recruiter_drive_round_controller.update)

}
