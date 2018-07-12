import {
  query
} from "../../../config/db";
import {
  college_recruiter_model
} from "./college_recruiter_model";

export let college_recruiter_controller = {
  get_all: (req, res) => {
    college_recruiter_model
      .get_all(req.params.collegeid)
      .then(data => {
        // make this object an array
        let array = []
        if (Array.isArray(data)) {
          res.status(200).json(data)
        } else {
          array.push(data)
          res.status(200).json(array)
        }
      }).catch((err) => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        })
      })
  },


}