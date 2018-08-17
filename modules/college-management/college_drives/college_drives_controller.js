import { collegeDrivesModel } from './college_drives_model'

export let collegeDrivesController = {
  get_all: (req, res) => {
    collegeDrivesModel.get_all(req.params.collegeid).then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: 'Bad Request', error: err })
    })
  }
}
