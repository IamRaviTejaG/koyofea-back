import { query } from "../../../config/db"

export let recruiter_drive_round_model = {
  // get_all unavailable because getting all drives isn't allowed, given the
  // privacy concerns.

  get_all: (drive_id) => {
    let sql = `SELECT * FROM recruiter_drive_round WHERE drive_id = ?`
    return query(sql, drive_id)
  },

  get_by_id: (drive_id, round_id) => {
    let sql = `SELECT * FROM recruiter_drive_round WHERE drive_id = ? AND round_id = ?`
    return query(sql, [drive_id,round_id])
  },

  add: (req) => {
    // TODO: verify drive_id
    let drive_id = req.body.drive_id
    let values = req.body.rounds
    let sql = `INSERT INTO recruiter_drive SET ?`
    // TODO: get data from array
    return query(sql, values)
  },

  // TODO: only soft delete
  // del: (drive_id, round_id) => {
  //   let sql = 'DELETE FROM `recruiter_drive_round` WHERE\
  //   recruiter_round_type_id="' + round_id + '" AND recruiter_drive_id\
  //   ="' + drive_id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, values) => {
    let sql = `UPDATE recruiter_drive_round SET ? Where id = ?`
    return query(sql ,[values, id])
  }
}
