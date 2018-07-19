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

  autofill.route('/grade-scale')
    .get(auto_fill.get_grade_scales)

  autofill.route('/industry')
    .get(auto_fill.get_industry_type_list)

  autofill.route('/job')
    .get(auto_fill.get_job_type)

  autofill.route('/major')
    .get(auto_fill.get_major)

  autofill.route('/positions')
    .get(auto_fill.get_positions)

  autofill.route('/schools')
    .get(auto_fill.get_schools)

  autofill.route('/colleges')
    .get(auto_fill.get_colleges)

  autofill.route('/programs')
    .get(auto_fill.get_programs)

  autofill.route('/designations')
    .get(auto_fill.get_designations)

  autofill.route('/organizations')
    .get(auto_fill.get_organizations)

  // Autofill ROUTES WITH /collections PREFIX RETURN ARRAYS of OBJECTS.
  autofill.route('/collections/education')
    .get(auto_fill.get_education_collection)

  autofill.route('/collections/experience')
    .get(auto_fill.get_experience_collection)
}
