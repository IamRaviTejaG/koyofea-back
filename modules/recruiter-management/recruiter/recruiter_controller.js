import { recruiter_model } from "./recruiter_model"
import { query } from "../../../config/db";
import { auto_fill, fun } from "../../common";


export let recruiter_controller = {
  get_all: (req, res) => {
    recruiter_model.get_all().then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  },

  auto_fill_data: (req, res) => {
    let recruiter_name = recruiter_model.get_all_name()
    let industry_type = auto_fill.industry_type_list()

    Promise.all([recruiter_name, industry_type]).then(([recruiter_name_list, industry_type_list]) => {
      let json = {}
      json.industry_type_list = fun.single_object_to_array(industry_type_list)
      json.recruiter_name_list = fun.single_object_to_array(recruiter_name_list)
      res.status(200).send(json)
    }).catch(err => {
      res.status(400).send({message: "Bad request", error: err})
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

  add_new: (req, res) => {
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
        res.status(200).json(req.body.recruiter_data)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  add_old: (req, res) => {
    let sql = `SELECT
    hr.id As recruiter_hr_id,
    (SELECT r.id FROM recruiter r WHERE r.name = ?) As recruiter_id
    FROM recruiter_hr hr
    WHERE hr.email=?`

    query(sql, [req.body.name, req.token_data.user.email]).then( results => {
    let object = {
      recruiter_id:results.recruiter_id,
      recruiter_hr_id:results.recruiter_hr_id
    }
    let recruiter_data = query(`SELECT r.* FROM recruiter r WHERE r.name =?`, req.body.name)
    let add_mapping = query(`INSERT INTO mapping_recruiter_hr SET ?`,object)
    let change_data2_status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
    return Promise.all([recruiter_data, add_mapping, change_data2_status])
    }).then(([a,b,c]) => {
      res.status(200).json(a)
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
