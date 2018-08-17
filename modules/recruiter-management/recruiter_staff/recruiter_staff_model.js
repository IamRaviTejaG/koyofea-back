import { query } from '../../../config/db'

export let recruiterStaffModel = {
  get_all: (recruiterId) => {
    let sql = `SELECT rhr.id as recruiter_hr_id, r.name, rhr.first_name,
          rhr.last_name, rhr.email
          FROM recruiter_hr rhr
          INNER
          JOIN mapping_recruiter_hr mrhr
          ON mrhr.recruiter_hr_id = rhr.id
          INNER
          JOIN recruiter r
          ON r.id = mrhr.recruiter_id
          WHERE r.id = ?`
    return query(sql, recruiterId)
  },

  update_role: (req) => {
    let sql = `UPDATE recruiter_hr rhr, mapping_recruiter_hr mrhr
          SET rhr.recruiter_hr_role_id = ${req.body.updatedrole}
          WHERE rhr.id = ${req.params.staffid}
          AND mrhr.recruiter_id = ${req.params.rid}`
    return query(sql, [])
  },

  update_status: (req) => {
    let sql = `UPDATE recruiter_hr rhr, mapping_recruiter_hr mrhr
          SET rhr.verified_status = ${req.body.status}
          WHERE rhr.id = ${req.params.staffid}
          AND mrhr.recruiter_id = ${req.params.rid}`
    return query(sql, [])
  }
}
