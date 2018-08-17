import { recruiterHrModel } from './recruiter_hr_model'
import { query } from '../../../config/db'

export let recruiterHrController = {
  get_all: (req, res) => {
    // TODO: with admin panel
    recruiterHrModel.get_all(req).then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    recruiterHrModel.add(req.body)
      .then(result => {
      // Update data filled status
        return query(`UPDATE users SET data1=true WHERE email=?`, req.body.email)
      }).then((data) => {
        res.status(200).json(req.body)
      }).catch((err) => {
        res.status(400).json({message: 'Bad Request', error: err})
      })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiterHrModel.get_by_id(req.params.id).then(users => {
      // If request id and users id doesn't match throw
      if (users ? !(users.email === req.token_data.user.email) : true) {
        throw new Error('Not permited to perform this action')
      }
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err.message})
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiterHrModel.update(req.params.id, req.body).then(user => {
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
