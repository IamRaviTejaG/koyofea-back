import { query } from '../../config/db'

export let dashboard = {
  user_data: req => {
    let tokenEmail = req.token_data.user.email
    let userType = req.token_data.user.user_type_id
    let sql

    // TODO: update according to mapping table
    let sql1 = `SELECT m.recruiter_hr_id As hr_id , r.id As recruiter_id,
                r.name As recruiter_name, hr.email
                FROM recruiter r
                INNER
                JOIN mapping_recruiter_hr m
                ON r.id = m.recruiter_id
                INNER
                JOIN recruiter_hr hr
                ON hr.id = m.recruiter_hr_id
                where hr.email = ?`

    let sql2 = `SELECT cc.id As coordinator_id, c.id As college_id,
                c.name As college_name, cc.email
                FROM college c
                INNER
                JOIN mapping_college_coordinator m
                ON c.id = m.college_id
                INNER
                JOIN college_coordinator cc
                ON cc.id = m.coordinator_id
                WHERE cc.email = ?`

    let sql3 = `SELECT s.id As student_id, s.first_name As student_fist_name,
                s.last_name As student_last_name, s.college_id As college_id,
                c.name As college_name
                FROM student s
                INNER
                JOIN college c on s.college_id = c.id
                WHERE s.email = ?`

    switch (userType) {
      case 1:
        sql = sql1
        break
      case 2:
        sql = sql2
        break
      case 3:
        sql = sql3
        break
      default:
        sql = 'SELECT * FROM empty e'
        break
    }

    return query(sql, tokenEmail)
      .then(data => {
        return data
      })
      .catch(err => {
        return err
      })
  }
}
