import { recruiter_hr_model } from "../../models/recruiter/recruiter_hr"
import { query } from "../../config/db";



export let recruiter_hr_controller = {
  get_all: (req,res) => {
    // TODO: with admin panel
    recruiter_hr_model.get_all(req).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  add: (req, res) => { 
    // Check if email is verified before entering data
    query(`SELECT email from users WHERE email_verified=false AND email=?`, req.body.email).then(users => {
      if(users[0]){
        // if not verified throw error
        throw "Email not verified"
      }
      // Add recruiter_hr
      return recruiter_hr_model.add(req.body) 
    }).then(result => {
      // Update data filled status
      return query(`UPDATE users SET data1=true WHERE email=?`, req.body.email)
    }).then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  
  },

  get_by_id: (req, res) => {
      // Get data by id
      recruiter_hr_model.get_by_id(req.params.id).then(users => {
        // If request id and users id doesn't match throw
        if(users[0] ? !(users[0].email == req.token_data.user.email) : true) {
          throw "Not permited to perform this action"
        }
        res.status(200).json(users)
      }).catch((err) => {
        res.status(400).json({ message: "Bad Request", error: err })
      })
  
  },
  
  update: (req, res) => {  
    // Get data by id
    recruiter_hr_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user[0].email == req.token_data.user.email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
