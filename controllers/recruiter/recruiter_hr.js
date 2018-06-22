import { recruiter_hr_model } from "../../models/recruiter/recruiter_hr"
import { auth } from "../../config/auth";
import { query, process_query } from "../../config/db";

export let recruiter_hr_controller = {
  get_all: () => {
    // TODO: with admin panel
    return recruiter_hr_model.get_all()
  },

  add: (req) => {   
    return new Promise((resolve, reject) => {
      // Check if email is verified before entering data
      query(`SELECT email from users WHERE email_verified=false AND email=?`, req.body.work_mail).then(users => {
        if(users[0] ? users[0].email == req.body.work_mail : false){
          // if not verified throw error
          throw "Email not verified"
        }
        // Add recruiter_hr
        return recruiter_hr_model.add(req.body)
      }).then(result => {
        let sql = `UPDATE users SET data1=true WHERE email=?`
        // Update data filled status
        return query(sql, req.body.work_mail)
      }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },

  get_by_id: (req) => {
    // Get email from token
    let token_email = auth.decode_token(req.get('token')).email
    return new Promise((resolve, reject) => {
      // Get data by id
      recruiter_hr_model.get_by_id(req.params.id).then(users => {
        // If request id and users id doesn't match throw
        if(users[0] ? !(users[0].work_email == token_email) : true) {
          throw "Not permited to perform this action"
        }
        resolve(users)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  
  update: (req) => {
  // Get email from token
  let token_email = auth.decode_token(req.get('token')).email
  return new Promise((resolve, reject) => {
    // Get data by id
    recruiter_hr_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      if(!(user[0].email == token_email)) {
        throw "Not permited to perform this action"
      }
      resolve(user)
    }).catch((err) => {
      reject(err)
    })
  })
  }
}
