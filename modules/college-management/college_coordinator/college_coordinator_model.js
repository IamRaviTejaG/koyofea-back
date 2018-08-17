import { query } from '../../../config/db'

export let college_coordinator_model = {

  get_all: () => {
    let sql = `SELECT * FROM college_coordinator`
    return query(sql, [])
  },

  get_by_id: (id) => {
    let sql = `SELECT * FROM college_coordinator WHERE id = ?`
    return query(sql, id)
  },

  add: (values) => {
    let sql = `INSERT INTO college_coordinator SET ?`
    return query(sql, values)
  },

  // ONLY soft delete
  // del: (coordinator_id) => {
  //   let sql = 'DELETE FROM `college_coordinator` WHERE id=\
  //   "' + coordinator_id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE college_coordinator SET ? WHERE id = ?`
    return query(sql, [values, id])
  }
}
