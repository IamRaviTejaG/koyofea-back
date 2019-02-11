import { collegeModel } from './college_model'
import { query } from '../../../config/db'
import { fun } from '../../common'

export let collegeController = {
  get_all: (req, res) => {
    // TODO: with admin panel
    collegeModel.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let collegeNameList = collegeModel.get_all_college_names()
    let collegeTypeList = collegeModel.get_college_type()
    Promise.all([collegeNameList, collegeTypeList]).then(([collegeNameList, collegeTypeList]) => {
      let json = {}
      json.college_name_list = fun.singleObjectToArray(collegeNameList)
      json.college_type_list = fun.singleObjectToArray(collegeTypeList)
      res.status(200).send(json)
    }).catch(err => {
      res.status(400).send({message: 'Bad request', error: err})
    })
  },

  add_old: (req, res) => {
    let sql = `SELECT
              cc.id As college_coordinator_id,
              (SELECT c.id FROM college c WHERE c.name = ?) As college_id
              FROM college_coordinator cc
              WHERE cc.email = ?`
    query(sql, [req.body.name, req.token_data.user.email]).then(results => {
      let object = {
        college_id: results.college_id,
        coordinator_id: results.college_coordinator_id
      }
      let addMapping = query(`INSERT INTO mapping_college_coordinator SET ?`, object)
      let changeData2Status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      return Promise.all([addMapping, changeData2Status])
    }).then(result => {
      res.status(200).json(req.body)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
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

    // Check if email is verified and request is for a college before entering data
    let q = query(sql, req.token_data.user.email)
    let addCollege = q.then(users => {
      console.log(users)
      // TODO: add middleware for email_verified
      req.body.college_data.college_coordinator_id = users.id
      // Add college
      return collegeModel.add(req.body.college_data)
    })
    Promise.all([q, addCollege]).then(([users, result]) => {
      let sql = `SELECT c.id, c.college_coordinator_id FROM college c WHERE c.college_coordinator_id = ?`
      return query(sql, users.id)
    }).then(results => {
      let object = {
        college_id: results.id,
        coordinator_id: results.college_coordinator_id
      }
      let addMapping = query(`INSERT INTO mapping_college_coordinator SET ?`, object)
      let changeData2Status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      return Promise.all([addMapping, changeData2Status])
    }).then(result => {
      res.status(200).json(req.body)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  },

  get_by_id: (req, res) => {
    // Get data by id
    collegeModel.get_by_id(req.params.collegeid).then(users => {
      // If request id and users id doesn't match throw
      // if(users ? !(users.email == req.token_data.user.email) : true) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(users)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    collegeModel.update(req.params.collegeid, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user.email == req.token_data.user.email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
