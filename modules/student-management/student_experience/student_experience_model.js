import { query } from "../../../config/db"

export let student_experience_model = {
  get_by_id: (id) => {
    let sql = `SELECT sexp.start_date, sexp.end_date, sexp.position,
              sexp.description, sexp.experience_type_id
              FROM student_experience sexp
              INNER
              JOIN student s
              ON sexp.student_id = s.id
              WHERE s.id = ?`
    return query(sql, id)
  },

  add_new: (values) => {
    let sql = `INSERT INTO student_experience sexp SET ?`
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
