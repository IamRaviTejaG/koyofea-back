import { query } from "../../config/db"
import { dashboard } from "../../controllers";

export let recruiter_drive_model = {

  // Get all drives of recruiter
  get_all: () => {
    let token_data = req.token_data
    let email = token_data.user.email
    //TODO: get recruiter id by using email
    let sql = `SELECT rd.* 
              FROM recruiter_drive  rd
              WHERE rd.recruiter_id = ( SELECT m.recruiter_id
                                        FROM mapping_recruiter_hr m
                                        INNER
                                        JOIN recruiter_hr hr
                                        ON hr.id = m.recruiter_hr_id
                                        WHERE hr.email = ?)`
    return query(sql, id)
  },

  get_by_id: (id) => {
    let sql = `SELECT * FROM recruiter_drive WHERE id = ?`
    return query(sql, id)
  },
  // TODO: needs testing
  add: (req) => {
    return dashboard.basic_data(req).then(data=>{
      req.recruiter_hr_id = data[0].hr_id
      req.recruiter_id = data[0].recruiter_id
      let sql =`INSERT INTO recruiter_drive SET ?`
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
    let sql = "UPDATE recruiter_drive SET ? WHERE id = ?"
    return query(sql, [object, id])
  }
}
