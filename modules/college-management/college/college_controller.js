import { college_model } from "./college_model";
import { query } from "../../../config/db";
import { fun } from "../../common";

export let college_controller = {
  get_all: (req, res) => {
    // TODO: with admin panel
    college_model.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let college_name_list = college_model.get_all_college_names()
    let college_type_list = college_model.get_college_type()
    Promise.all([college_name_list, college_type_list]).then(([college_name_list, college_type_list]) => {
      let json = {}
      json.college_name_list = fun.single_object_to_array(college_name_list)
      json.college_type_list = fun.single_object_to_array(college_type_list)
      res.status(200).send(json)
    }).catch(err => {
      res.status(400).send({message: "Bad request", error: err})
    })
  },

  add_old: (req, res) => {
    let sql = `SELECT
              cc.id As college_coordinator_id,
              (SELECT c.id FROM college c WHERE c.name = ?) As college_id
              FROM college_coordinator cc
              WHERE cc.email = ?`
    query(sql, [req.body.name, req.token_data.user.email]).then( results => {
      let object = {
        college_id:results.college_id,
        coordinator_id:results.college_coordinator_id
      }
      let add_mapping = query(`INSERT INTO mapping_college_coordinator SET ?`, object)
      let change_data2_status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      return Promise.all([add_mapping, change_data2_status])
    }).then(result => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  add_new: (req, res) => {
      // Get email from token
      // TODO: remove extra code
      let sql = `SELECT cc.id, cc.email, u.email_verified
            FROM users u
            INNER
            JOIN college_coordinator cc
            ON cc.email=u.email
            WHERE cc.email=?`

      // Check if email is verified and request is for a colleg before entering data
      let q = query(sql, req.token_data.user.email)
      let add_college = q.then( users => {
        console.log(users)
        // TODO: add middleware for email_verified
        req.body.college_data.college_coordinator_id = users.id
        // Add college
        return college_model.add(req.body.college_data)
      })
      Promise.all([q, add_college]).then(([users, result]) => {
        let sql = `SELECT c.id, c.college_coordinator_id FROM college c WHERE c.college_coordinator_id = ?`
        return query(sql, users.id)
      }).then( results => {
        let object = {
          college_id:results.id,
          coordinator_id:results.college_coordinator_id
        }
        let add_mapping = query(`INSERT INTO mapping_college_coordinator SET ?`, object)
        let change_data2_status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
        return Promise.all([add_mapping, change_data2_status])
      }).then(result => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({message: "Bad Request", error: err})
      })
  },

  get_by_id: (req, res) => {
      // Get data by id
      college_model.get_by_id(req.params.collegeid).then(users => {
        // If request id and users id doesn't match throw
        // if(users ? !(users.email == req.token_data.user.email) : true) {
        //   throw "Not permited to perform this action"
        // }
        res.status(200).json(users)
      }).catch((err) => {
        res.status(400).json({ message: "Bad Request", error: err })
      })

  },

  update: (req, res) => {
    // Get data by id
    college_model.update(req.params.collegeid, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user.email == req.token_data.user.email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
