import { collegeStudentModel } from './college_student_model'

export let collegeStudentController = {
  get_all: (req, res) => {
    collegeStudentModel.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  },

  update_status: (req, res) => {
    collegeStudentModel.update_status(req).then(data => {
      res.status(200).json({
        message: 'Updated status for studentid: ' + req.params.studentid})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request', error: err})
    })
  }
}
