import { return_data } from "../../config/db"

export let recruiter_hr_model = {
  get_all: () => {
    let sql = "SELECT * FROM `recruiter_hr`"
    console.log(sql)
    return return_data(sql)
  },

  get_by_id: (id) => {
    let sql = 'SELECT first_name, last_name, work_mail, linkedin, linkedin_id\
    FROM `recruiter_hr` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter_hr`\
    (first_name, last_name, work_mail, linkedin, linkedin_id) VALUES\
    (' + values_str + ')'
    console.log(sql)
    return return_data(sql)
  },

  del: (id) => {
    let sql = 'DELETE FROM `recruiter_hr` WHERE id="' + id + '"'
    console.log(sql)
    return return_data(sql)
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
