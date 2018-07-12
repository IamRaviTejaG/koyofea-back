import { query } from "../../../config/db";
import { recruiter_college_model } from "./recruiter_college_model";

export let recruiter_college_controller = {
  get_all: (req, res) => {
    recruiter_college_model
      .get_all(req.params.recruiterid)
      .then(data => {
        // make this object an array
        let array = [];
        if (Array.isArray(data)) {
          res.status(200).json(data);
        } else {
          array.push(data);
          res.status(200).json(array);
        }
      })
      .catch(err => {
        res.status(400).json({
          message: "Bad Request",
          error: err
        });
      });
  }
};
