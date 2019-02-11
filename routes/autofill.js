import { autofillController } from '../modules/common'
export const autofill = require('express').Router()

export default () => {
  autofill.route('/duration')
    .get(autofillController.getDuration)

  autofill.route('/eligibility')
    .get(autofillController.getEligibilityTypes)

  autofill.route('/employment')
    .get(autofillController.getEmploymentType)

  autofill.route('/gender')
    .get(autofillController.getGender)

  autofill.route('/grade-scale')
    .get(autofillController.getGradeScales)

  autofill.route('/industry')
    .get(autofillController.getIndustryTypeList)

  autofill.route('/job')
    .get(autofillController.getJobType)

  autofill.route('/job-locations')
    .get(autofillController.getJobLocations)

  autofill.route('/major')
    .get(autofillController.getMajor)

  autofill.route('/positions')
    .get(autofillController.getPositions)

  autofill.route('/schools')
    .get(autofillController.getSchools)

  autofill.route('/colleges')
    .get(autofillController.getColleges)

  autofill.route('/programs')
    .get(autofillController.getPrograms)

  autofill.route('/designations')
    .get(autofillController.getDesignations)

  autofill.route('/organizations')
    .get(autofillController.getOrganizations)
}
