import { query } from "../../config/db"

export let recruiter_drive_round_model = {
  // get_all unavailable because getting all drives isn't allowed, given the
  // privacy concerns.

  // get_all: () => {
  //   let sql = "SELECT * FROM `recruiter_drive`"
  //   query(sql).then((result) => {
  //     console.log(result)
  //     return result
  //   }).catch((err) => {
  //     throw err
  //   })
  // },

  get_by_id: (drive_id, round_id) => {
    let sql = 'SELECT name, round_no, url, description, no_eligible,\
    no_applied, round_intake, no_passed, date, duration\
    FROM `recruiter_drive_round` WHERE recruiter_round_type_id=\
    "' + round_id + '" AND recruiter_drive_id="' + drive_id + '"'
    console.log(sql)
    return query(sql)
  },

  add: (drive_id, round_id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = 'INSERT INTO `recruiter_drive_round`\
    (name, round_no, url, description, no_eligible, no_applied, round_intake,\
    no_passed, date, duration) VALUES  (' + values_str + ') WHERE\
    recruiter_round_type_id="' + round_id + '" AND recruiter_drive_id=\
    "' + drive_id + '"'
    console.log(sql)
    return query(sql)
  },

  del: (drive_id, round_id) => {
    let sql = 'DELETE FROM `recruiter_drive_round` WHERE\
    recruiter_round_type_id="' + round_id + '" AND recruiter_drive_id\
    ="' + drive_id + '"'
    console.log(sql)
    return query(sql)
  },

  update: (id, values) => {
    let values_str = values.map(value => `"${value}"`).join(', ')
    let sql = ""
  }
}
