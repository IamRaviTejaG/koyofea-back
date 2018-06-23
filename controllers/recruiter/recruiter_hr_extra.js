import { recruiter_hr_extra_model } from "../../models/recruiter/recruiter_hr"
import { auth } from "../../config/auth";
import { query } from "../../config/db";

export let recruiter_hr_extra_controller = {
  get_all: () => {
    // TODO: with admin panel
    return recruiter_hr_extra_model.get_all()
  },

  add: (req) => {   
    return new Promise((resolve, reject) => {
      // Check if email is verified before entering data
      let token_email = auth.decode_token(req.get("x-api-key")).user.email
      query(`SELECT email, data1, data2 from users WHERE email=?`, token_email).then(users => {
        if(!users[0].email){
          // if not verified throw error
          throw "Email not verified"
        }
        if(!(users[0].data1 || users[0].data2)){
          throw "Profile not Complete"
        }
        // Add recruiter_hr
        return recruiter_hr_extra_model.add(req.body)
      }).then(result => {
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },

  get_by_id: (req) => {
    // Get email from token
    let token_email = auth.decode_token(req.get('x-api-key')).user.email
    return new Promise((resolve, reject) => {
      // Get data by id
      recruiter_hr_extra_model.get_by_id(req.params.id).then(users => {
        // If request id and users id doesn't match throw
        // if(users[0] ? !(users[0].email == token_email) : true) {
        //   throw "Not permited to perform this action"
        // }
        resolve(users)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  
  update: (req) => {
  // Get email from token
  let token_email = auth.decode_token(req.get('x-api-key')).user.email
  return new Promise((resolve, reject) => {
    // Get data by id
    recruiter_hr_extra_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user[0].email == token_email)) {
      //   throw "Not permited to perform this action"
      // }
      resolve(user)
    }).catch((err) => {
      reject(err)
    })
  })
  }
}
