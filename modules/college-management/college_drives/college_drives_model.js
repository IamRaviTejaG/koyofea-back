import { query } from '../../../config/db'

export let college_drives_model = {
  get_all: college_id => {
    let sql = `SELECT rd.id, r.name AS company_name, rd.name as drive_name,
               rd.created, rd.status, jt.name AS job_type, mdc.recruiter_accept
               FROM recruiter_drive rd
               INNER
               JOIN job_type jt
               ON jt.id = rd.job_type_id
               INNER
               JOIN recruiter r
               ON r.id = rd.recruiter_id
               INNER
               JOIN mapping_drive_college mdc
               ON mdc.drive_id = rd.id
               WHERE mdc.college_id = ?`
    return query(sql, college_id)
  }
}
