import { recruiter_hr_extra_model } from "../../models/recruiter/recruiter_hr"
import { auth } from "../../config/auth";
import { query } from "../../config/db";
import { check, validationResult } from "express-validator/check"

let errorHandling = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Error!", error: errors.mapped() })
  }
  return 
}

export let recruiter_hr_extra_controller = {
  get_all: (req, res) => {
    // TODO: with admin panel
    return recruiter_hr_extra_model.get_all()
  },

  add: (req, res) => {   
    if(req.validationErros) {
      return errorHandling(req,res)
    } 
    // Check if email is verified before entering data
    let token_email = req.token_data.user.email
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
      res.status(200).json({message: "Updated Successfully", err: {}})
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  get_by_id: (req, res) => {
    // Get email from token
  
    // Get data by id
    recruiter_hr_extra_model.get_by_id(req.params.id).then(users => {
      // If request id and users id doesn't match throw
      // if(users[0] ? !(users[0].email == token_email) : true) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(users)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },
  
  update: (req, res) => {
    if(req.validationErros) {
      return errorHandling(req,res)
    } 
    
      // Get data by id
    recruiter_hr_extra_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user[0].email == token_email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json({message: "Updated Successfully", err: {}})
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })

  }
}
