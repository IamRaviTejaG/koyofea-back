import { query } from "../../../config/db";

export let autofill_model = {
  get_industry_type_list : () => {
    let sql = `SELECT id, name FROM industry`
    return query(sql)
  },

  get_duration: () => {
    let sql = `SELECT id, name FROM recruiter_drive_duration`
    return query(sql)
  },

  get_employment_type: () => {
    let sql = `SELECT id, name FROM employment_type`
    return query(sql)
  },

  get_job_type: () => {
    let sql = `SELECT id, name FROM job_type`
    return query(sql)
  },

  get_positions: () => {
    let sql = `SELECT id, name FROM position`
    return query(sql)
  },

  get_eligibility_types:  () => {
    let sql = `SELECT id, name FROM eligibility_type`
    return query(sql)
  },

  get_grade_scales: () => {
    let sql = `SELECT id FROM grade_scale`
    return query(sql)
  },

  get_gender: () => {
    let sql = `SELECT id, name FROM gender`
    return query(sql)
  },

  get_major: () => {
    let sql = `SELECT id, name FROM major`
    return query(sql)
  },

  get_schools: () => {
    let sql = `SELECT DISTINCT sed.institute_name from student_education sed`
    return query(sql)
  },

  get_colleges: () => {
    let sql = `SELECT DISTINCT col.name from college col`
    return query(sql)
  },

  get_programs: () => {
    let sql = `SELECT id, name FROM program`
    return query(sql)
  },

  get_designations: () => {
    let sql = `SELECT DISTINCT sexp.designation FROM student_experience sexp`
    return query(sql)
  },

  get_organizations: () => {
    let sql = `SELECT DISTINCT sexp.organization_name
              FROM student_experience sexp`
    return query(sql)
  }

  // get_education_collection: () => {
  //   let edu_array = []
  //   async function create_edu_array () {
  //     let sql = `SELECT DISTINCT sed.institute_name from student_education sed`
  //     let res1 = await query(sql)
  //     edu_array.push(res1)
  //     sql = `SELECT id FROM grade_scale`
  //     let res2 = await query(sql)
  //     edu_array.push(res2)
  //     sql = `SELECT DISTINCT col.name from college col`
  //     let res3 = await query(sql)
  //     edu_array.push(res3)
  //     sql = `SELECT id, name FROM major`
  //     let res4 = await query(sql)
  //     edu_array.push(res4)
  //     sql = `SELECT id, name FROM program`
  //     let res5 = await query(sql)
  //     edu_array.push(res5)
  //     res.status(200).json(edu_array)
  //   }
  //   create_edu_array()
  // },
  //
  // get_experience_collection: () => {
  //   let exp_array = []
  //   async function create_exp_array () {
  //     let sql = `SELECT DISTINCT sexp.designation FROM student_experience sexp`
  //     let res1 = await query(sql)
  //     exp_array.push(res1)
  //     sql = `SELECT DISTINCT sexp.organization_name
  //           FROM student_experience sexp`
  //     let res2 = await query(sql)
  //     exp_array.push(res2)
  //     res.status(200).json(exp_array)
  //   }
  //   create_exp_array()
  // }
}
