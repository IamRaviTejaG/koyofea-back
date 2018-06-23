
import { process_query } from "../../config/db"

export let recruiter_hr_extra_model = {
  get_all: () => {
    let sql = `SELECT * FROM recruiter_hr_extra`   
    return process_query(sql,[])
  },

  get_by_id: (id) => {
    let sql = `SELECT phone, bio, designation, public_profile WHERE id= ?`
    return process_query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO recruiter_hr_extra SET ?`
    return process_query(sql, values)
  },

  // cannot delete recruiter_hr
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter_hr` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return process_query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE recruiter_hr_extra SET ? WHERE id  = ?`
    return process_query(sql, [values, id])
  }
}
