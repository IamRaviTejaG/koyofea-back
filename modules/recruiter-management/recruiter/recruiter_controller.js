import { recruiter_model } from "./recruiter_model"
import { query } from "../../../config/db";


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
      // if(users ? !(users.recruiter_hr_id == ) : true) {
      //   throw "Not permited to perform this action"
      // }
        res.status(200).json(users)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  add: (req, res) => {
    if(!req.body.recruiter.new){
      let sql = `SELECT r.id, r.recruiter_hr_id FROM recruiter r WHERE r.name = ?`
      query(sql, req.body.recruiter.name).then( results => {
        let object = {
          recruiter_id:results.id,
          recruiter_hr_id:results.recruiter_hr_id
        }
        let add_mapping = query(`INSERT INTO mapping_recruiter_hr SET ?`,object)
        let change_data2_status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)  
        Promise.all([add_mapping, change_data2_status]).then(result => {
          res.status(200).json(req.body)
        }).catch(err => {
          res.status(400).json({message: "Bad Request", error: err})
        })
      })
    } else {
      // Get email from token
      // TODO: remove extra code
      let sql = `SELECT hr.id, hr.email, u.email_verified
            FROM users u 
            INNER 
            JOIN recruiter_hr hr 
            ON hr.email=u.email 
            WHERE hr.email=?` 
        
      // Check if email is verified and request is for a recruiter before entering data
      let q = query(sql, req.token_data.user.email)
      let add_recruiter = q.then( users => {
        if(!users){          
          throw "You are not registered"
        }
        // TODO: add middleware for email_verified
        req.body.recruiter_data.recruiter_hr_id = users.id
        // Add recruiter_hr
        return recruiter_model.add(req.body.recruiter_data) 
      })
      Promise.all([q, add_recruiter]).then(([users, result]) => {
        let sql = `SELECT r.id, r.recruiter_hr_id FROM recruiter r WHERE r.recruiter_hr_id = ?`
        return query(sql, users.id)
      }).then( results => {
        let object = {
          recruiter_id:results.id,
          recruiter_hr_id:results.recruiter_hr_id
        }
        let add_mapping = query(`INSERT INTO mapping_recruiter_hr SET ?`,object)
        let change_data2_status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)  
        return Promise.all([add_mapping, change_data2_status])
      }).then(result => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
    }

  },

  update: (req, res) => { 
    recruiter_model.update(req.params.id, req.body).then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
