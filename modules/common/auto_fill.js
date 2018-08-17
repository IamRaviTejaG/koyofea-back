import { query } from '../../config/db'

export let autoFillOld = {
  industry_type_list: () => {
    let sql = `SELECT id, name FROM industry`
    return query(sql, [])
  },

  get_duration: () => {
    let sql = `SELECT id, name FROM recruiter_drive_duration`
    return query(sql, [])
  },

  get_employment_type: () => {
    let sql = `SELECT id, name FROM employment_type`
    return query(sql, [])
  },

  get_job_type: () => {
    let sql = `SELECT id, name FROM job_type`
    return query(sql, [])
  },

  get_positions: () => {
    let sql = `SELECT id, name FROM position`
    return query(sql, [])
  },

  get_eligibility_types: () => {
    let sql = `SELECT id, name FROM eligibility_type`
    return query(sql, [])
  },

  get_grade_scales: () => {
    let sql = `SELECT id, name FROM grade_scale`
    return query(sql, [])
  },

  get_gender: () => {
    let sql = `SELECT id, name FROM gender`
    return query(sql, [])
  },

  get_major: () => {
    let sql = `SELECT * FROM major`
    return query(sql, [])
  },

  get_schools: () => {
    let sql = `SELECT DISTINCT sed.institute_name from student_education sed`
    return query(sql, [])
  },

  get_colleges: () => {
    let sql = `SELECT DISTINCT col.name from college col`
    return query(sql, [])
  },

  get_programs: () => {
    let sql = `SELECT id, name FROM program`
    return query(sql, [])
  }
}
