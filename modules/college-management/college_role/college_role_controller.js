import { collegeRoleModel } from './college_role_model'

export let collegeRoleController = {
  get_all: (req, res) => {
    collegeRoleModel.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
