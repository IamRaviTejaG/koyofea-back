import { query } from "../../../config/db"

export let college_drives_model = {
  get_all: (college_id) => {
    let sql = `SELECT * FROM recruiter_drive rd
              INNER
              JOIN mapping_drive_college mdc
              ON mdc.drive_id = rd.id
              WHERE mdc.college_id = ?`
    return query(sql, college_id)
  }
}
