import { query } from '../../../config/db'

export let recruiterDriveEligibilityModel = {
  // get_all unavailable because getting all drives isn't allowed, given the
  // privacy concerns.

  get_all: (driveId) => {
    let sql = `SELECT * FROM recruiter_drive_eligibility WHERE drive_id = ?`
    return query(sql, driveId)
  },

  get_by_id: (driveId, roundId) => {
    let sql = `SELECT * FROM recruiter_drive_eligibility WHERE drive_id = ? AND id = ?`
    return query(sql, [driveId, roundId])
  },

  add: (values) => {
    // TODO: verify drive_id
    let sql = `INSERT INTO recruiter_drive_eligibility SET ?`
    // TODO: get data from array
    return query(sql, values)
  },

  // TODO: only soft delete
  // del: (drive_id, round_id) => {
  //   let sql = 'DELETE FROM `recruiter_drive_eligibility` WHERE\
  //   recruiter_round_type_id="' + round_id + '" AND recruiter_drive_id\
  //   ="' + drive_id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    // TODO: add recrutier_drive_id
    let sql = `UPDATE recruiter_drive_eligibility SET ? Where id = ?`
    return query(sql, [values, id])
  }
}
