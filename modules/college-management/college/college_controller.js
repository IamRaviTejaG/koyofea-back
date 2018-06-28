import { college_model } from "./college_model";




export let college_controller = {

  get_all: (req,res) => {
    // TODO: with admin panel
    college_model.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  add: (req, res) => {
    if(!req.body.college.new){
      let sql = `SELECT c.id, c.college_coordinator_id FROM college c WHERE c.name = ?`
      query(sql, req.body.college.name).then( results => {
        let object = {
          college_id:results.id,
          coordinator_id:results.college_coordinator_id
        }
        let add_mapping = query(`INSERT INTO mapping_college_coordinator SET ?`, object)
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
      let sql = `SELECT cc.id, cc.email, u.email_verified
            FROM users u 
            INNER 
            JOIN college_coordinator cc 
            ON cc.email=u.email 
            WHERE cc.email=?` 
        
      // Check if email is verified and request is for a colleg before entering data
      let q = query(sql, req.token_data.user.email)
      let add_college = q.then( users => {
        if(!users){          
          throw "You are not registered"
        }
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
    }

  },
  get_by_id: (req, res) => {
      // Get data by id
      college_model.get_by_id(req.params.id).then(users => {
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
    college_model.update(req.params.id, req.body).then(user => {
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
