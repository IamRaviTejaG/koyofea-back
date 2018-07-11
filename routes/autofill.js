export const autofill = require("express").Router()
import { auto_fill } from "../modules/common/autofill";

export default () => {
  autofill.route('/duration')
    .get(auto_fill.get_duration)

  autofill.route('/eligibility')
    .get(auto_fill.get_eligibility_types)

  autofill.route('/employment')
    .get(auto_fill.get_employment_type)

  autofill.route('/gender')
    .get(auto_fill.get_gender)

  autofill.route('/gradescale')
    .get(auto_fill.get_grade_scales)

  autofill.route('/industry')
    .get(auto_fill.industry_type_list)

  autofill.route('/job')
    .get(auto_fill.get_job_type)

  autofill.route('/major')
    .get(auto_fill.get_major)

  autofill.route('/positions')
    .get(auto_fill.get_positions)
}
