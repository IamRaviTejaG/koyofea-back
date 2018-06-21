import { process_query } from "../../config/db"

export let recruiter_hr_model = {
  get_all: () => {
    let sql = `SELECT * FROM recruiter_hr`
    
    return process_query(sql,[])
  },

  get_by_id: (id) => {
    let sql = `SELECT first_name, last_name, work_mail, linkedin, linkedin_id\
    FROM recruiter_hr WHERE id= ?`

    return process_query(sql, id)
  },

  add: (values) => {
    let object = {
      first_name : values.first_name,
      last_name : values.last_name,
      work_mail : values.work_mail,
      linkedin : values.linkedin,
      linkedin_id : values. linkedin_id
    }
    let sql = `INSERT INTO recruiter_hr SET ?`
    return process_query(sql, object)
  },

  // cannot delete recruiter_hr
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter_hr` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return process_query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE recruiter_hr SET ? WHERE id  = ?`
    return process_query(sql, [values, id])
  }
}
