import { autofillModel } from '../autofill/autofill_model'
import { fun } from '../../common'

export let autofillCollectionsController = {
  getEducation: (req, res) => {
    let schoolsList = autofillModel.getSchools()
    let gradeScaleList = autofillModel.getGradeScales()
    let collegesList = autofillModel.getColleges()
    let majorsList = autofillModel.getMajor()
    let programsList = autofillModel.getPrograms()
    Promise.all([
      schoolsList,
      gradeScaleList,
      collegesList,
      majorsList,
      programsList]).then(([
      schoolsList,
      gradeScaleList,
      collegesList,
      majorsList,
      programsList]) => {
      let json = {}
      json.schoolsList = fun.singleObjectToArray(schoolsList)
      json.gradeScaleList = fun.singleObjectToArray(gradeScaleList)
      json.collegesList = fun.singleObjectToArray(collegesList)
      json.majorsList = fun.singleObjectToArray(majorsList)
      json.programsList = fun.singleObjectToArray(programsList)
      res.status(200).json(json)
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
        error: err
      })
    })
  },

  getExperience: (req, res) => {
    let designationsList = autofillModel.getDesignations()
    let organizationsList = autofillModel.getOrganizations()
    Promise.all([designationsList, organizationsList]).then(([
      designationsList, organizationsList]) => {
      let json = {}
      json.designationsList = fun.singleObjectToArray(designationsList)
      json.organizationsList = fun.singleObjectToArray(organizationsList)
      res.status(200).json(json)
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
        error: err
      })
    })
  }
}
