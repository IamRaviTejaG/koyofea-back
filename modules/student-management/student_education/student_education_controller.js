import { studentEducationModel } from './student_education_model'

export let studentEducationController = {
  // get_all: (req, res) => {
  //   studentEducationModel.get_all().then(data => {
  //     res.status(200).json(data)
  //   }).catch(err => {
  //     res.status(400).json({message: "Bad Request!", error: err})
  //   })
  // },

  // auto_fill_data: (req, res) => {
  //   let student_name = studentEducationModel.get_all_name()
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

  get: (req, res) => {
    // Get data by id
    studentEducationModel.get(req.params.studentid).then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  add_new: (req, res) => {
    studentEducationModel.add_new(req.body).then(data => {
      res.status(200).json({message: 'Added successfully!'})
    }).catch(err => {
      res.status(400).json({message: 'Bad Request!', error: err})
    })
  },

  update: (req, res) => {
    studentEducationModel.update(req.params.studentid, req.body)
      .then(data => {
        res.status(200).json({
          message: 'Updated education details!',
          studentid: req.params.studentid
        })
      }).catch(err => {
        res.status(400).json({message: 'Bad Request!', error: err})
      })
  }
}
