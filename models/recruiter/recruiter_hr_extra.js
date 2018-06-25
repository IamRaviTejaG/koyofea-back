
import { query } from "../../config/db"

export let recruiter_hr_extra_model = {
  get_all: () => {
    let sql = `SELECT * FROM recruiter_hr_extra`   
    return query(sql,[])
  },

  get_by_id: (id) => {
    let sql = `SELECT phone, bio, designation, public_profile FROM recruiter_hr_extra WHERE recruiter_hr_id= ?`
    return query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO recruiter_hr_extra SET ?`
    return query(sql, values)
  },

  // cannot delete recruiter_hr
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter_hr` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE recruiter_hr_extra SET ? WHERE id  = ?`
    return query(sql, [values, id])
  }
}
