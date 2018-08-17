import { recruiter_drive_eligibility_model } from './recruiter_drive_eligibility_model'
import { query } from '../../../config/db'
import { auto_fill, fun } from '../../common'

export let recruiter_drive_eligibility_controller = {

  get_all: (req, res) => {
    // TODO: with admin panel
    recruiter_drive_eligibility_model.get_all(req.params.driveid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let eligibility_type_list = auto_fill.get_eligibility_types()
    let grade_scale_list = auto_fill.get_grade_scales()
    Promise.all([eligibility_type_list, grade_scale_list])
      .then(([eligibility_type_list, grade_scale_list]) => {
        let json = {}
        json.grade_scale_list = fun.single_object_to_array(grade_scale_list)
        json.eligibility_type_list = fun.single_object_to_array(eligibility_type_list)
        res.status(200).send(json)
      }).catch(err => {
        res.status(400).send({message: 'Bad request', error: err})
      })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    let fun = (data) => {
      data.recruiter_drive_id = req.params.driveid
      return recruiter_drive_eligibility_model.add(data)
    }
    console.log(req.body)
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
    recruiter_drive_eligibility_model.get_by_id(req.params.driveid, req.params.eid).then(users => {
      // If request id and users id doesn't match throw
      res.status(200).json(users)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiter_drive_eligibility_model.update(req.params.eid, req.body).then(user => {
      // If request id and users id doesn't match throw
      res.status(200).json({message: 'Updated Successfully', err: {}})
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
