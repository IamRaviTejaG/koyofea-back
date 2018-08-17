import { collegeStaffModel } from './college_staff_model'

export let collegeStaffController = {
  get_all: (req, res) => {
    collegeStaffModel.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update_role: (req, res) => {
    collegeStaffModel.update_role(req).then(data => {
      res.status(200).json({
        message: 'Updated role for staffid: ' + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  },

  update_status: (req, res) => {
    collegeStaffModel.update_status(req).then(data => {
      res.status(200).json({
        message: 'Updated status for staffid: ' + req.params.staffid})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  }
}
