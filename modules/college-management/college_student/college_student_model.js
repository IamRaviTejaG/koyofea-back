import { query } from '../../../config/db'

export let collegeStudentModel = {
  get_all: (collegeId) => {
    let sql = `SELECT s.id as student_id, s.first_name, s.last_name,
          s.email, s.dob, s.mobile, s.linkedin_id, g.name as gender,
          m.name as major_name, cp.name as program_name
          FROM student s
          INNER
          JOIN college_program cp
          ON s.college_program_id = cp.id
          INNER
          JOIN major m
          ON s.college_major_id = m.id
          INNER
          JOIN gender g
          ON s.gender_id = g.id
          WHERE s.college_id = ?`
    return query(sql, collegeId)
  },

  update_status: (req) => {
    let sql = `UPDATE student s, college c
          SET s.verified = ${req.body.verified_status}
          WHERE c.id = ${req.params.collegeid}
          AND s.id = ${req.params.studentid}`
    return query(sql, [])
  }
}
