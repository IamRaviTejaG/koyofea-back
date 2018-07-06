import { query } from "../../../config/db";
import { college_staff_model } from "./college_staff_model";

export let college_staff_controller = {
  get_all: (req, res) => {
    // TODO: with admin panel
    college_staff_model.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  update: (req, res) => {
    college_staff_model.update(req).then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({message: "Bad Request", error: err})
    })
  }
}
