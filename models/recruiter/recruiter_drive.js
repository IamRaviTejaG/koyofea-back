import { return_data } from "../../config/db"

export let recruiter_drive_model = {
  // get_all unavailable because getting all drives isn't allowed, given the
  // privacy concerns.

  // get_all: () => {
  //   let sql = "SELECT * FROM `recruiter_drive`"
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (id) => {
    let sql = 'SELECT name, duration, wok_study_job, paid, salary_low,\
    salary_high, joining_date, description, no_openings, no_positions, url,\
    job_location, start_date, end_date, multiple_applications, 12th_percentage,\
    10th_percentage, graduation_year, cgpa, other_eligiblity, no_rounds \
    FROM `recruiter_drive` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter_drive`\
    (name, duration, wok_study_job, paid, salary_low, salary_high,\
    joining_date, description, no_openings, no_positions, url, job_location,\
    start_date, end_date, multiple_applications, 12th_percentage,\
    10th_percentage, graduation_year, cgpa, other_eligiblity, no_rounds \
    (' + values_str + ')'
    console.log(sql)
    return return_data(sql)
  },

  del: (id) => {
    let sql = 'DELETE FROM `recruiter_drive` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
