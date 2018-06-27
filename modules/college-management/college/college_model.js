import { query } from "../../../config/db"

export let college_model = {
  get_all: () => {
    let sql = `SELECT * FROM college`
    return query(sql, [])
  },

  get_by_id: (id) => {
    let sql = `SELECT * FROM college WHERE id = ?`
    return query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO college SET ?`
    return query(sql, values)
  },

  // ONLY SOFT DELETE ALLOWED
  // del: (id) => {
  //   let sql = 'DELETE FROM `college` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE college SET ? WHERE id = ?`
    return query(sql, [values, id])
  }
}
