import { recruiterModel } from './recruiter_model'
import { query } from '../../../config/db'
import { autoFillOld, fun } from '../../common'

export let recruiterController = {
  get_all: (req, res) => {
    recruiterModel.get_all().then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  },

  auto_fill_data: (req, res) => {
    let recruiterName = recruiterModel.get_all_name()
    let industryType = autoFillOld.industry_type_list()

    Promise.all([recruiterName, industryType]).then(([recruiterNameList, industryTypeList]) => {
      let json = {}
      json.industry_type_list = fun.singleObjectToArray(industryTypeList)
      json.recruiter_name_list = fun.singleObjectToArray(recruiterNameList)
      res.status(200).send(json)
    }).catch(err => {
      res.status(400).send({message: 'Bad request', error: err})
    })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiterModel.get_by_id(req.params.id).then(users => {
      // If request id and users id doesn't match throw
      // console.log(users)
      // if(users ? !(users.recruiter_hr_id == ) : true) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
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
    let addRecruiter = q.then(users => {
      if (!users) {
        throw new Error('You are not registered!')
      }
      // TODO: add middleware for email_verified
      req.body.recruiter_data.recruiter_hr_id = users.id
      // Add recruiter_hr
      return recruiterModel.add(req.body.recruiter_data)
    })
    Promise.all([q, addRecruiter]).then(([users, result]) => {
      let sql = `SELECT r.id, r.recruiter_hr_id FROM recruiter r WHERE r.recruiter_hr_id = ?`
      return query(sql, users.id)
    }).then(results => {
      let object = {
        recruiter_id: results.id,
        recruiter_hr_id: results.recruiter_hr_id
      }
      let addMapping = query(`INSERT INTO mapping_recruiter_hr SET ?`, object)
      let changeData2Status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      return Promise.all([addMapping, changeData2Status])
    }).then(result => {
      res.status(200).json(req.body.recruiter_data)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err.message})
    })
  },

  add_old: (req, res) => {
    let sql = `SELECT
    hr.id As recruiter_hr_id,
    (SELECT r.id FROM recruiter r WHERE r.name = ?) As recruiter_id
    FROM recruiter_hr hr
    WHERE hr.email=?`

    query(sql, [req.body.name, req.token_data.user.email]).then(results => {
      let object = {
        recruiter_id: results.recruiter_id,
        recruiter_hr_id: results.recruiter_hr_id
      }
      let recruiterData = query(`SELECT r.* FROM recruiter r WHERE r.name =?`, req.body.name)
      let addMapping = query(`INSERT INTO mapping_recruiter_hr SET ?`, object)
      let changeData2Status = query(`UPDATE users SET data2=true WHERE email=?`, req.token_data.user.email)
      return Promise.all([recruiterData, addMapping, changeData2Status])
    }).then(([a, b, c]) => {
      res.status(200).json(a)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  },

  update: (req, res) => {
    recruiterModel.update(req.params.id, req.body).then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
