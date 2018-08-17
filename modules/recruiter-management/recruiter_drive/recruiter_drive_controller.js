import { recruiterDriveModel } from './recruiter_drive_model'
import { query } from '../../../config/db'
import { autoFillOld, fun, dashboard } from '../../common'

export let recruiterDriveController = {
  get_all: async (req, res) => {
    // TODO: with admin panel
    let userData = await dashboard.user_data(req)
    if (userData.recruiter_id !== req.params.rid) {
      return res.status(400).send({message: 'Not allowed', error: 'PERMISSION DENIED'})
    }
    recruiterDriveModel.get_all(userData.recruiter_id).then(data => {
      // TODO remove placeholder data
      let addPlaceholderData = (object) => {
        object.college_applicants_no = 1
        object.student_applicants_no = 5
        return object
      }
      data.map(addPlaceholderData)
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  get_drives_requested: (req, res) => {
    recruiterDriveModel.get_drives_requested(req.params.rid).then(drives => {
      res.status(200).send(drives)
    }).catch(err => {
      res.status(400).send({message: 'Bad request', error: err})
    })
  },

  auto_fill_data: (req, res) => {
    let durationList = autoFillOld.get_duration()
    let employmentTypeList = autoFillOld.get_employment_type()
    let jobTypeList = autoFillOld.get_job_type()
    let positionList = autoFillOld.get_positions()
    Promise.all([durationList, employmentTypeList, jobTypeList, positionList])
      .then(([durationList, employmentTypeList, jobTypeList, positionList]) => {
        let json = {}
        json.duration_list = fun.singleObjectToArray(durationList)
        json.employment_type_list = fun.singleObjectToArray(employmentTypeList)
        json.job_type_list = fun.singleObjectToArray(jobTypeList)
        json.position_list = fun.singleObjectToArray(positionList)
        res.status(200).send(json)
      }).catch(err => {
        res.status(400).send({message: 'Bad request', error: err})
      })
  },

  add: async (req, res) => {
    let userData = await dashboard.user_data(req)
    req.body.recruiter_id = userData.recruiter_id
    req.body.recruiter_hr_id = userData.hr_id
    recruiterDriveModel.add(req)
      .then(data => {
        return query(`SELECt id FROM recruiter_drive WHERE name = ? order by id DESC LIMIT 1`, [req.body.name])
      }).then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json({ message: 'Bad Request', error: err })
      })
  },

  get_by_id: (req, res) => {
    // Get data by id
    recruiterDriveModel.get_by_id(req.params.id).then(drives => {
      // If request id and users id doesn't match throw
      res.status(200).json(drives)
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update: (req, res) => {
    // Get data by id
    recruiterDriveModel.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw

      res.status(200).json({message: 'Updated Successfully', err: {}})
    }).catch(err => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
