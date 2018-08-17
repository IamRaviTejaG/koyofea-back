import { query } from '../../../config/db'

export let student_project_model = {
  get_all: id => {
    let sql = `SELECT
    sp.* FROM student_project sp
    WHERE sp.student_id = ?
    ORDER BY sp.end_date DESC`
    return query(sql, id)
  },

  // get_by_id: id => {
  //   let sql = `SELECT sp.name, sp.description, sp.url,
  //             FROM student_project sp
  //             INNER
  //             JOIN student s
  //             ON sp.student_id = s.id
  //             WHERE s.id = ?`
  //   return query(sql, id)
  // },

  add_new: values => {
    let sql = `INSERT INTO student_project SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `student` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE student_project sp SET ? WHERE sp.student_id = ?`
    return query(sql, [values, id])
  }
}
