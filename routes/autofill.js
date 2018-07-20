export const autofill = require("express").Router()
import { autofill_controller } from "../modules/common/autofill/autofill_controller";

export default () => {
  autofill.route('/duration')
    .get(autofill_controller.get_duration)

  autofill.route('/eligibility')
    .get(autofill_controller.get_eligibility_types)

  autofill.route('/employment')
    .get(autofill_controller.get_employment_type)

  autofill.route('/gender')
    .get(autofill_controller.get_gender)

  autofill.route('/grade-scale')
    .get(autofill_controller.get_grade_scales)

  autofill.route('/industry')
    .get(autofill_controller.get_industry_type_list)

  autofill.route('/job')
    .get(autofill_controller.get_job_type)

  autofill.route('/major')
    .get(autofill_controller.get_major)

  autofill.route('/positions')
    .get(autofill_controller.get_positions)

  autofill.route('/schools')
    .get(autofill_controller.get_schools)

  autofill.route('/colleges')
    .get(autofill_controller.get_colleges)

  autofill.route('/programs')
    .get(autofill_controller.get_programs)

  autofill.route('/designations')
    .get(autofill_controller.get_designations)

  autofill.route('/organizations')
    .get(autofill_controller.get_organizations)
}
