import { recruiterDriveEligibilityModel } from './recruiter_drive_eligibility_model'
import { autoFillOld, fun } from '../../common'

export let recruiterDriveEligibilityController = {

  get_all: (req, res) => {
    // TODO: with admin panel
    recruiterDriveEligibilityModel.get_all(req.params.driveid).then((data) => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let eligibilityTypeList = autoFillOld.get_eligibility_types()
    let gradeScaleList = autoFillOld.get_grade_scales()
    Promise.all([eligibilityTypeList, gradeScaleList])
      .then(([eligibilityTypeList, gradeScaleList]) => {
        let json = {}
        json.grade_scale_list = fun.single_object_to_array(gradeScaleList)
        json.eligibility_type_list = fun.single_object_to_array(eligibilityTypeList)
        res.status(200).send(json)
      }).catch(err => {
        res.status(400).send({message: 'Bad request', error: err})
      })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    let fun = (data) => {
      data.recruiter_drive_id = req.params.driveid
      return recruiterDriveEligibilityModel.add(data)
    }
    console.log(req.body)
    let eligibilities = req.body.map(fun)
    Promise.all(eligibilities)
      .then((data) => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({ message: 'Bad Request', error: err })
      })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiterDriveEligibilityModel.get_by_id(req.params.driveid, req.params.eid).then(users => {
      // If request id and users id doesn't match throw
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiterDriveEligibilityModel.update(req.params.eid, req.body).then(user => {
      // If request id and users id doesn't match throw
      res.status(200).json({message: 'Updated Successfully', err: {}})
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
