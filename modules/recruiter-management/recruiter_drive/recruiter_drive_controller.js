import { recruiter_drive_model } from "./recruiter_drive_model"
import { query } from "../../../config/db";
import { auto_fill, fun, dashboard } from "../../common";

export let recruiter_drive_controller = {
  get_all: async (req, res) => {
    // TODO: with admin panel
    let user_data = await dashboard.user_data(req)
    if(user_data.recruiter_id != req.params.rid){
      return res.status(400).send({message: "Not allowed", error: "PERMISSION DENIED"})
    }
    recruiter_drive_model.get_all(user_data.recruiter_id).then((data) => {
      // TODO remove placeholder data
      let add_placeholder_data = (object) => {
        object.college_applicants_no = 1
        object.student_applicants_no = 5
        return object
      }
      data.map(add_placeholder_data)

      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  auto_fill_data: (req, res) => {
    let duration_list = auto_fill.get_duration()
    let employment_type_list = auto_fill.get_employment_type()
    let job_type_list = auto_fill.get_job_type()
    let position_list = auto_fill.get_positions()
    Promise.all([duration_list, employment_type_list, job_type_list, position_list])
    .then(([duration_list, employment_type_list, job_type_list, position_list]) => {
      let json = {}
      json.duration_list = fun.single_objet_to_array(duration_list)
      json.employment_type_list = fun.single_objet_to_array(employment_type_list)
      json.job_type_list = fun.single_objet_to_array(job_type_list)
      json.position_list = fun.single_objet_to_array(position_list)
      res.status(200).send(json)
    }).catch(err => {
      res.status(400).send({message: "Bad request", error: err})
    })
  },

  add: async (req, res) => {
    let user_data = await dashboard.user_data(req)
    req.body.recruiter_id = user_data.recruiter_id
    req.body.recruiter_hr_id = user_data.hr_id
    recruiter_drive_model.add(req)
    .then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  get_by_id: (req, res) => {
      // Get data by id
      recruiter_drive_model.get_by_id(req.params.id).then(drives => {
        // If request id and users id doesn't match throw
        res.status(200).json(drives)
      }).catch((err) => {
        res.status(400).json({ message: "Bad Request", error: err })
      })
  },

  update: (req, res) => {
    // Get data by id
    recruiter_drive_model.update(req.params.id, req.body).then(user => {
      // If request id and users id doesn't match throw

      res.status(200).json({message: "Updated Successfully", err: {}})
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
