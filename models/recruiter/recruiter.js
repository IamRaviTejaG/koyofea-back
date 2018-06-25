import { query } from "../../config/db"

export let recruiter_model = {
  get_all: () => {
    let sql = `SELECT * FROM recruiter`
    return query(sql, [])
  },

  get_by_id: (id) => {
    let sql = `SELECT * FROM recruiter WHERE id= ?`
    return query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO recruiter SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
      let sql = `UPDATE recruiter SET ? WHERE id  = ?`
      return query(sql, [values, id])
  }
}
