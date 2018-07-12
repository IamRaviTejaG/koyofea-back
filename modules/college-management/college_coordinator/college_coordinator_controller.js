import { query } from "../../../config/db";
import { college_coordinator_model } from "./college_coordinator_model";

export let college_coordinator_controller = {
  get_all: (req, res) => {
    // TODO: with admin panel
    college_coordinator_model.get_all().then((data) => {
      res.status(200).json(data)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  },

  add: (req, res) => {
    // Check if email is verified before entering data
    college_coordinator_model.add(req.body)
    .then(result => {
      // Update data filled status
      return query(`UPDATE users SET data1=true WHERE email=?`, req.body.email)
    }).then((data) => {
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })

  },

  get_by_id: (req, res) => {
      // Get data by id
      college_coordinator_model.get_by_id(req.params.coordinatorid).then(users => {
        // If request id and users id doesn't match throw
        // if(users ? !(users.email == req.token_data.user.email) : true) {
        //   throw "Not permited to perform this action"
        // }
        res.status(200).json(users)
      }).catch((err) => {
        res.status(400).json({ message: "Bad Request", error: err })
      })

  },

  update: (req, res) => {
    // Get data by id
    college_coordinator_model.update(req.params.coordinatorid, req.body).then(user => {
      // If request id and users id doesn't match throw
      // if(!(user.email == req.token_data.user.email)) {
      //   throw "Not permited to perform this action"
      // }
      res.status(200).json(req.body)
    }).catch((err) => {
      res.status(400).json({ message: "Bad Request", error: err })
    })
  }
}
