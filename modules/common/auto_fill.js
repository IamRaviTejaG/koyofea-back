import { query } from "../../config/db";

export let auto_fill = {
  industry_type_list : () => {
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

  get_eligibility_types:  () => {
    let sql = `SELECT id, name FROM eligibility_type`
    return query(sql, [])
  },

  get_grade_scales: () => {
    let sql = `SELECT id, name FROM grade_scale`
    return query(sql, [])
  }
}