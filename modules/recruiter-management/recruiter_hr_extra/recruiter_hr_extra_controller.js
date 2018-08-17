import { recruiterHrExtraModel } from './recruiter_hr_extra_model'
import { query } from '../../../config/db'

export let recruiterHrExtraController = {
  get_all: (req, res) => {
    // TODO: with admin panel
    return recruiterHrExtraModel.get_all()
  },

  add: (req, res) => {
    let basicData = req.basic_data
    console.log(basicData)
    // Check if email is verified before entering data
    let tokenEmail = req.token_data.user.email
    req.body.recruiter_hr_id = basicData.hr_id
    query(`SELECT email, data1, data2 from users WHERE email=?`, tokenEmail).then(users => {
      if (!users.email) {
        // if not verified throw error
        throw new Error('Email not verified!')
      }
      if (!(users.data1 || users.data2)) {
        throw new Error('Profile not complete!')
      }
      // Add recruiter_hr
      return recruiterHrExtraModel.add(req.body)
    }).then(result => {
      res.status(200).json(req.body)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  get_by_id: (req, res) => {
    // Get email from token

    // Get data by id
    recruiterHrExtraModel.get_by_id(req.params.id).then(users => {
      // If request id and users id doesn't match throw
      // if(users ? !(users.email == token_email) : true) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiterHrExtraModel.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user.email == token_email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(req.body)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
