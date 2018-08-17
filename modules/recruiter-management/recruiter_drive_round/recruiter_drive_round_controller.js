import { recruiterDriveRoundModel } from './recruiter_drive_round_model'
import { fun } from '../../common'

export let recruiterDriveRoundController = {

  get_all: (req, res) => {
    // TODO: with admin panel
    recruiterDriveRoundModel.get_all(req.params.drive_id).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let roundTypeList = recruiterDriveRoundModel.get_round_types()
    Promise.all([roundTypeList])
      .then(([roundTypeList]) => {
        let json = {}
        json.roundTypeList = fun.singleObjectToArray(roundTypeList)
        res.status(200).send(json)
      }).catch(err => {
        res.status(400).send({message: 'Bad request', error: err})
      })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    let fun = (data) => {
      data.recruiter_drive_id = req.params.driveid
      return recruiterDriveRoundModel.add(data)
    }
    let eligibilities = req.body.map(fun)
    Promise.all(eligibilities)
      .then(data => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({ message: 'Bad Request', error: err })
      })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiterDriveRoundModel.get_by_id(req.params.drive_id, req.params.round_id).then(users => {
      // If request id and users id doesn't match throw
      if (users ? !(users.email === req.token_data.user.email) : true) {
        throw new Error('Not permited to perform this action')
      }
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err.message })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiterDriveRoundModel.update(req.body.id, req.body).then(user => {
      // If request id and users id doesn't match throw
      if (!(user.email === req.token_data.user.email)) {
        throw new Error('Not permited to perform this action')
      }
      res.status(200).json({message: 'Updated Successfully', err: {}})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err.message})
    })
  }
}
