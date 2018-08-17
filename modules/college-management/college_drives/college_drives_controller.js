import { query } from '../../../config/db'
import { college_drives_model } from './college_drives_model'

export let college_drives_controller = {
  get_all: (req, res) => {
    college_drives_model.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
