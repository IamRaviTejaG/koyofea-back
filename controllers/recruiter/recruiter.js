import { recruiter_model } from "../models/recruiter/recruiter"

export let recruiter_controller = {
  get_all: () => {
    return recruiter_model.get_all()
  },

  get_by_id: (id) => {
    return recruiter_model.get_by_id(id)
  },

  add: (values) => {
    return recruiter_model.add(id) 
  },

  update: (id, values) => {
    return recruiter_model.update(id, values)
  }
}
