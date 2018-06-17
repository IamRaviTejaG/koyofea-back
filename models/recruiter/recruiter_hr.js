import { query } from "../../config/db"

export let recruiter_hr_model = {
  get_all: () => {
    let sql = "SELECT * FROM `recruiter_hr`"
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  get_by_id: (id) => {
    let sql = 'SELECT first_name, last_name, work_mail, linkedin, linkedin_id\
    FROM `recruiter_hr` WHERE id="' + id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  add: (values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter_hr`\
    (first_name, last_name, work_mail, linkedin, linkedin_id) VALUES\
    (' + values_str + ')'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  del: (id) => {
    let sql = 'DELETE FROM `recruiter_hr` WHERE id="' + id + '"'
    query(sql).then((result) => {
      console.log(result)
      return result
    }).catch((err) => {
      throw err
    })
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
