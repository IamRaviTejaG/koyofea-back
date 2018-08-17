import { query } from '../../../config/db'

export let recruiterCollegeModel = {
  get_all: recruiterId => {
    // TODO: change sql query
    let sql = `SELECT
              DISTINCT c.*, cc.first_name As coordinator_first_name,
              cc.last_name As coordinator_last_name,
              cc.email As coordinator_email
              FROM college c
              INNER
              JOIN college_coordinator cc
              ON cc.id = c.college_coordinator_id
              INNER
              JOIN mapping_drive_college mdc
              ON mdc.college_id = c.id
              INNER
              JOIN recruiter_drive rd
              ON rd.id = mdc.drive_id
              WHERE
              mdc.college_accept = true
              AND rd.recruiter_id = ?`
    return query(sql, recruiterId)
  }
}
