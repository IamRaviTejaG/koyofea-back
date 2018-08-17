import { query } from '../../../config/db'
import { dashboard } from '../../common'

export let recruiterDriveModel = {

  // Get all drives of recruiter
  get_all: (recruiterId) => {
    // let token_data = req.token_data
    // let email = token_data.user.email
    // let user_data = await dashboard.user_data(req)
    // console.log(user_data + "saf".red)
    // TODO: get recruiter id by using email
    // let sql = `SELECT rd.*
    //           FROM recruiter_drive  rd
    //           WHERE rd.recruiter_id = ( SELECT m.recruiter_id
    //                                     FROM mapping_recruiter_hr m
    //                                     INNER
    //                                     JOIN recruiter_hr hr
    //                                     ON hr.id = m.recruiter_hr_id
    //                                     WHERE hr.email = ?)`
    let sql = `SELECT rd.id, r.name AS company_name, rd.name, rd.created, rd.status, jt.name AS job_type
               FROM recruiter_drive rd
               INNER
               JOIN  job_type jt
               ON jt.id = rd.job_type_id
               INNER
               JOIN recruiter r
               ON r.id = rd.recruiter_id
               WHERE rd.recruiter_id = ?`
    return query(sql, recruiterId)
  },

  get_by_id: (id) => {
    let sql = `SELECT * FROM recruiter_drive WHERE id = ?`
    return query(sql, id)
  },

  get_drives_requested: (rid) => {
    let sql = `SELECT rd.*
              FROM recruiter_drive rd
              INNER
              JOIN mapping_drive_college mdc
              ON rd.id = mdc.drive_id
              WHERE mdc.recruiter_accept = false
              AND rd.recruiter_id = ?`
    return query(sql, rid)
  },

  // TODO: needs testing
  add: (req) => {
    return dashboard.user_data(req).then(data => {
      req.recruiter_hr_id = data.hr_id
      req.recruiter_id = data.recruiter_id
      let sql = `INSERT INTO recruiter_drive SET ?`
      return query(sql, req.body)
    })
  },

  // TODO: add soft delete
  // del: (id) => {
  //   let sql = 'DELETE FROM `recruiter_drive` WHERE id="' + id + '"'
  //   console.log(sql)
  //   return query(sql)
  // },

  update: (id, object) => {
    let sql = 'UPDATE recruiter_drive SET ? WHERE id = ?'
    return query(sql, [object, id])
  }
}
