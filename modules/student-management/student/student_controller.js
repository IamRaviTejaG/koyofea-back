import { student_model } from './student_model'
import { query } from '../../../config/db'
import { auto_fill, fun } from '../../common'

export let student_controller = {
  // get_all: (req, res) => {
  //   student_model.get_all().then(data => {
  //     res.status(200).json(data)
  //   }).catch(err => {
  //     res.status(400).json({message: "Bad Request!", error: err})
  //   })
  // },

  // auto_fill_data: (req, res) => {
  //   let student_name = student_model.get_all_name()
  //   let industry_type = auto_fill.industry_type_list()
  //
  //   Promise.all([student_name, industry_type]).then(([student_name_list, industry_type_list]) => {
  //     let json = {}
  //     json.industry_type_list = fun.single_object_to_array(industry_type_list)
  //     json.student_name_list = fun.single_object_to_array(student_name_list)
  //     res.status(200).send(json)
  //   }).catch(err => {
  //     res.status(400).send({message: "Bad Request!", error: err})
  //   })
  // },

  get_by_id: (req, res) => {
    // Get data by id
    student_model.get_by_id(req.params.studentid).then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  add_new: (req, res) => {
    // Get email from token
    // TODO: remove extra code
    student_model.add_new(req.body).then(data => {
      res.status(200).json({message: 'Successfully added!', error: null})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  update: (req, res) => {
    student_model.update(req.params.studentid, req.body).then(data => {
      res.status(200).json({
        message: 'Updated student details!',
        error: null
      })
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  }
}
