import { query } from "../../config/db";

export let dashboard = {
  user_data: req => {
    let token_email = req.token_data.user.email;
    let user_type = req.token_data.user.user_type_id;
    let sql;
    // TODO: update according to mapping table
    let sql_1 = `SELECT m.recruiter_hr_id As hr_id , r.id As recruiter_id, r.name As recruiter_name, hr.email
                FROM recruiter r
                INNER
                JOIN mapping_recruiter_hr m
                ON r.id = m.recruiter_id
                INNER
                JOIN recruiter_hr hr
                ON hr.id = m.recruiter_hr_id
                where hr.email = ?`;

    let sql_2 = `SELECT cc.id As coordinator_id, c.id As college_id, c.name As college_name, cc.email
                FROM college c
                INNER
                JOIN mapping_college_coordinator m
                ON c.id = m.college_id
                INNER
                JOIN college_coordinator cc
                ON cc.id = m.coordinator_id
                WHERE cc.email = ?`;
    let sql_3;
    switch (user_type) {
      case 1:
        sql = sql_1;
        break;
      case 2:
        sql = sql_2;
        break;
      case 3:
        sql = sql_3;
        break;

      default:
        break;
    }
    return query(sql, token_email)
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
  }
};
