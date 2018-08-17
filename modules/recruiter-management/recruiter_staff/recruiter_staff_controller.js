import { recruiterStaffModel } from './recruiter_staff_model'

export let recruiterStaffController = {
  get_all: (req, res) => {
    recruiterStaffModel.get_all(req.params.rid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update_role: (req, res) => {
    recruiterStaffModel.update_role(req).then(data => {
      console.log(data)
      res.status(200).json({
        message: 'Updated role for staffid: ' + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  },

  update_status: (req, res) => {
    recruiterStaffModel.update_status(req).then(data => {
      res.status(200).json({
        message: 'Updated status for staffid: ' + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  }
}
