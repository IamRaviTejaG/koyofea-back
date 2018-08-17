import { recruiter_drive_round_model } from './recruiter_drive_round_model'
import { query } from '../../../config/db'
import { fun } from '../../common'

export let recruiter_drive_round_controller = {

  get_all: (req, res) => {
    // TODO: with admin panel
    recruiter_drive_round_model.get_all(req.params.drive_id).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let round_type_list = recruiter_drive_round_model.get_round_types()
    Promise.all([round_type_list])
      .then(([round_type_list]) => {
        let json = {}
        json.round_type_list = fun.single_object_to_array(round_type_list)
        res.status(200).send(json)
      }).catch(err => {
        res.status(400).send({message: 'Bad request', error: err})
      })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    let fun = (data) => {
      data.recruiter_drive_id = req.params.driveid
      return recruiter_drive_round_model.add(data)
    }
    let eligibilities = req.body.map(fun)
    Promise.all(eligibilities)
      .then((data) => {
        res.status(200).json(req.body)
      }).catch((err) => {
        res.status(400).json({ message: 'Bad Request', error: err })
      })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiter_drive_round_model.get_by_id(req.params.drive_id, req.params.round_id).then(users => {
      // If request id and users id doesn't match throw
      if (users ? !(users.email == req.token_data.user.email) : true) {
        throw 'Not permited to perform this action'
      }
      res.status(200).json(users)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiter_drive_round_model.update(req.body.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      if (!(user.email == req.token_data.user.email)) {
        throw 'Not permited to perform this action'
      }
      res.status(200).json({message: 'Updated Successfully', err: {}})
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
