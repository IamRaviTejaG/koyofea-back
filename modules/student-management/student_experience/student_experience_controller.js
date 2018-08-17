import { studentExperienceModel } from './student_experience_model'

export let studentExperienceController = {
  get_all: (req, res) => {
    studentExperienceModel.get_by_id(req.params.studentid).then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  // TESTING PENDING for the routes below.
  // ^ Status as on 26th July 2018.
  add_new: (req, res) => {
    let fun = (data) => {
      data.student_id = req.basic_data.student_id
      return studentExperienceModel.add_new(data)
    }
    let experience = req.body.map(fun)
    Promise.all(experience).then(data => {
      res.status(200).json({message: 'Successfully added!', error: null})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  update: (req, res) => {
    studentExperienceModel.update(req.params.studentid, req.body)
      .then(data => {
        res.status(200).json(req.body)
      }).catch(err => {
        res.status(400).json({message: 'Bad Request!', error: err})
      })
  }
}
