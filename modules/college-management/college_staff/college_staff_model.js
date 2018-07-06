import { query } from "../../../config/db"

export let college_staff_model = {
  get_all: () => {
    let sql = `SELECT cc.first_name, cc.last_name, cc.email,
          cc.college_coordinator_position_id as coordinator_position,
          cr.status
          FROM college_coordinator cc
          INNER
          JOIN mapping_college_coordinator mcc
          ON mcc.college_id = ?
          INNER
          JOIN college_role cr
          ON cr.id = cc.college_coordinator_position_id`
    return query(sql, [])
  },

  update: (req) => {
    let sql = `UPDATE college_coordinator cc
          SET cc.college_role_id = ${req.body.updatedrole}
          WHERE cc.id = ${req.params.staffid}`
    return query(sql, [])
  }
}
