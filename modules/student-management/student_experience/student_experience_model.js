import { query } from '../../../config/db'

export let student_experience_model = {
  get_all: id => {
    let sql = `SELECT sexp.*
              FROM student_experience sexp
              WHERE sexp.student_id = ?
              ORDER BY sp.end_date DESC`
    return query(sql, id)
  },

  add_new: values => {
    let sql = `INSERT INTO student_experience SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `student` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE student_experience sexp SET ? WHERE sexp.student_id = ?`
    return query(sql, [values, id])
  }
}
