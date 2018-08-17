import { query } from '../../../config/db'

export let studentModel = {
  // GET_ALL & GET_ALL_NAME (Disabled for privacy)
  // get_all: () => {
  //   let sql = `SELECT s.id, s.first_name, s.last_name, s.email, s.dob,
  //             s.linkedin_id, s.college_id, s.gender_id, s.college_major_id,
  //             s.college_program_id FROM student s`
  //   return query(sql, [])
  // },

  // get_all_name: () => {
  //   let sql = `SELECT s.id AS student_id, s.first_name, s.last_name
  //             FROM student s`
  //   return query(sql, [])
  // },

  get_by_id: id => {
    let sql = `SELECT * FROM student s WHERE s.id = ?`
    return query(sql, id)
  },

  // get_by_id: (id) => {
  //   let sql = `SELECT s.id, s.first_name, s.last_name, s.email, s.dob,
  //             s.linkedin_id, s.college_id, s.gender_id, s.college_major_id,
  //             s.college_program_id FROM student s WHERE s.id = ?`
  //   return query(sql, id)
  // },

  add_new: values => {
    let sql = `INSERT INTO student SET ?`
    return query(sql, values)
  },

  // Not Deleting the data
  // del: (id) => {
  //   let sql = 'DELETE FROM `student` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE student SET ? WHERE id = ?`
    return query(sql, [values, id])
  }
}
