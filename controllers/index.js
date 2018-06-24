import { auth } from "../config/auth";
import { query } from "../config/db";

export let dashboard = {
  basic_data: (req) =>{

    let token_email = req.token_data.user.email
    let user_type = req.token_data.user.user_type_id
    let sql
    let sql_1 = `SELECT hr.id As hr_id , r.id As recruiter_id, r.name As recruiter_name 
          FROM recruiter r
          INNER 
          JOIN recruiter_hr hr 
          ON hr.id=r.recruiter_hr_id
          WHERE hr.email=?`
    let sql_2 
    let sql_3
    switch (user_type) {
      case 1:
        sql = sql_1
        break;
      case 2:
        sql = sql_2
        break;
      case 3:
        sql = sql_3
        break;
    
      default:
        break;
    }
    return query(sql, token_email).then(data => {
      return data
    }).catch(err => {
      return err
    })      
  }
}