import { recruiter_model } from "../../models/recruiter/recruiter"
import { auth } from "../../config/auth";
import { query } from "../../config/db";
import { validationResult } from "express-validator/check"



export let recruiter_controller = {
  get_all: (req, res) => {
    recruiter_model.get_all().then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  },

  get_by_id: (req, res) => {
   
    // Get data by id
    recruiter_model.get_by_id(req.params.id).then(users => {
      // If request id and users id doesn't match throw
      // console.log(users)
      // if(users[0] ? !(users[0].recruiter_hr_id == ) : true) {
      //   throw "Not permited to perform this action"
      // }
        res.status(200).json(users)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  add: (req, res) => {
      // Get email from token
      let sql = `SELECT hr.id, hr.email, u.email_verified
             FROM users u 
             INNER 
             JOIN recruiter_hr hr 
             ON hr.email=u.email 
             WHERE hr.email=?` 
      // Check if email is verified and request is for a recruiter before entering data
      query(sql, req.token_data.user.email).then(users => {
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
        return query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      }).then(result => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  update: (req, res) => {
     
    recruiter_model.update(req.params.id, req.body).then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
