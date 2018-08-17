import { autofill_model } from '../autofill/autofill_model'
import { fun } from '../../common'

export let autofill_collections_controller = {
  get_education: (req, res) => {
    let schools_list = autofill_model.get_schools()
    let grade_scale_list = autofill_model.get_grade_scales()
    let colleges_list = autofill_model.get_colleges()
    let majors_list = autofill_model.get_major()
    let programs_list = autofill_model.get_programs()
    Promise.all([
      schools_list,
      grade_scale_list,
      colleges_list,
      majors_list,
      programs_list]).then(([
      schools_list,
      grade_scale_list,
      colleges_list,
      majors_list,
      programs_list]) => {
      let json = {}
      json.schools_list = fun.single_object_to_array(schools_list)
      json.grade_scale_list = fun.single_object_to_array(grade_scale_list)
      json.colleges_list = fun.single_object_to_array(colleges_list)
      json.majors_list = fun.single_object_to_array(majors_list)
      json.programs_list = fun.single_object_to_array(programs_list)
      res.status(200).json(json)
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
        error: err
      })
    })
  },

  get_experience: (req, res) => {
    let designations_list = autofill_model.get_designations()
    let organizations_list = autofill_model.get_organizations()
    Promise.all([designations_list, organizations_list]).then(([
      designations_list, organizations_list]) => {
      let json = {}
      json.designations_list = fun.single_object_to_array(designations_list)
      json.organizations_list = fun.single_object_to_array(organizations_list)
      res.status(200).json(json)
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
        error: err
      })
    })
  }
}
