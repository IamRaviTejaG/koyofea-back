import { query } from '../../../config/db'

export let autofillModel = {
  getIndustryTypeList: () => {
    let sql = `select id, name from industry`
    return query(sql)
  },

  getDuration: () => {
    let sql = `select id, name from recruiter_drive_duration`
    return query(sql)
  },

  getEmploymentType: () => {
    let sql = `select id, name from employment_type`
    return query(sql)
  },

  getJobType: () => {
    let sql = `select id, name from job_type`
    return query(sql)
  },

  getPositions: () => {
    let sql = `select id, name from position`
    return query(sql)
  },

  getEligibilityTypes: () => {
    let sql = `select id, name from eligibility_type`
    return query(sql)
  },

  getGradeScales: () => {
    let sql = `select id from grade_scale`
    return query(sql)
  },

  getGender: () => {
    let sql = `select id, name from gender`
    return query(sql)
  },

  getMajor: () => {
    let sql = `select id, name from major`
    return query(sql)
  },

  getSchools: () => {
    let sql = `select distinct sed.institute_name from student_education sed`
    return query(sql)
  },

  getColleges: () => {
    let sql = `select distinct col.name from college col`
    return query(sql)
  },

  getPrograms: () => {
    let sql = `select id, name from program`
    return query(sql)
  },

  getDesignations: () => {
    let sql = `select distinct sexp.designation from student_experience sexp`
    return query(sql)
  },

  getOrganizations: () => {
    let sql = `select distinct sexp.organization_name
              from student_experience sexp`
    return query(sql)
  },

  getJobLocations: () => {
    let sql = `select distinct location_name from job_locations`
    return query(sql)
  }
}
