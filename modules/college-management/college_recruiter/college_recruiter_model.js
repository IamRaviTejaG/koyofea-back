import { query } from '../../../config/db'

export let collegeRecruiterModel = {
  get_all: (collegeId) => {
    let sql = `SELECT
              DISTINCT r.* , rh.email As hr_email , rh.first_name As hr_first_name, rh.last_name As hr_last_name
              FROM recruiter r
              INNER
              JOIN recruiter_hr rh
              ON rh.id = r.recruiter_hr_id
              INNER
              JOIN recruiter_drive rd
              ON rd.recruiter_id = r.id
              INNER
              JOIN mapping_drive_college mdc
              ON mdc.drive_id = rd.id
              WHERE
              mdc.college_id = ?`
    return query(sql, collegeId)
  }

}
