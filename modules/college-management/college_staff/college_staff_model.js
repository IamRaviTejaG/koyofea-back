import { query } from '../../../config/db'

export let college_staff_model = {
  get_all: (college_id) => {
    let sql = `SELECT cc.id as coordinator_id, cc.first_name, cc.last_name,
          cc.email, cc.college_role_id as coordinator_role,
          cr.role_name, cc.verified_status
          FROM college_coordinator cc
          INNER
          JOIN mapping_college_coordinator mcc
          ON mcc.coordinator_id = cc.id
          INNER
          JOIN college_role cr
          ON cr.id = cc.college_role_id
          WHERE mcc.college_id = ?`
    return query(sql, college_id)
  },

  update_role: (req) => {
    let sql = `UPDATE college_coordinator cc, mapping_college_coordinator mcc
          SET cc.college_role_id = ${req.body.updatedrole}
          WHERE cc.id = ${req.params.staffid}
          AND mcc.college_id = ${req.params.collegeid}`
    return query(sql, [])
  },

  update_status: (req) => {
    let sql = `UPDATE college_coordinator cc, mapping_college_coordinator mcc
          SET cc.verified_status = ${req.body.verified_status}
          WHERE cc.id = ${req.params.staffid}
          AND mcc.college_id = ${req.params.collegeid}`
    return query(sql, [])
  }
}
