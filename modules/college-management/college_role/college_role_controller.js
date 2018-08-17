import { query } from '../../../config/db'
import { college_role_model } from './college_role_model'

export let college_role_controller = {
  get_all: (req, res) => {
    college_role_model.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
