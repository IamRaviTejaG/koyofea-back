import { recruiter_model } from "../../models/recruiter/recruiter"
import { auth } from "../../config/auth";
import { query } from "../../config/db";

export let recruiter_controller = {
  get_all: () => {
    return recruiter_model.get_all()
  },

  get_by_id: (req) => {
    // Get email from token
    let token_email = auth.decode_token(req.get('x-api-key')).email
    return new Promise((resolve, reject) => {
      // Get data by id
      recruiter_model.get_by_id(req.params.id).then(users => {
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

  add: (req) => {
    return new Promise((resolve, reject) => {
      // Get email from token
      let token_email = auth.decode_token(req.get('x-api-key')).user.email
      let sql = `SELECT hr.id, hr.email, u.email_verified
             FROM users u 
             INNER 
             JOIN recruiter_hr hr 
             ON hr.email=u.email 
             WHERE hr.email=?` 
      // Check if email is verified and request is for a recruiter before entering data
      query(sql, token_email).then(users => {
        if(!users[0]){          
          throw "You are not registered"
        }
        if(!users[0].email_verified){
          throw "Email not verified"
        }
        req.body.recruiter_hr_id = users[0].id
         // Add recruiter_hr
         console.log(req.body)
        return recruiter_model.add(req.body) 
      }).then(result => {
        // Update data filled status
        return query(`UPDATE users SET data2=true WHERE email=?`, token_email)
      }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },

  update: (id, values) => {
    return recruiter_model.update(id, values)
  }
}
