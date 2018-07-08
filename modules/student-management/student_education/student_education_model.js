import { query } from "../../../config/db"

export let student_education_model = {
  get_by_id: (id) => {
    let sql = `SELECT s.id, s.first_name, s.last_name, sed.start_date,
              sed.end_date, sed.institute_name, sed.percentage, sed.cgpa
              FROM student s
              INNER
              JOIN student_education sed
              ON sed.student_id = s.id
              WHERE s.id = ?`
    return query(sql, id)
  },

  add_new: (values) => {
    let sql = `INSERT INTO student_education sed SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `student` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
      let sql = `UPDATE student_education sed SET ? WHERE sed.student_id = ?`
      return query(sql, [values, id])
  }
}
