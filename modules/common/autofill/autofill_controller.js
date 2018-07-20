import { autofill_model } from "./autofill_model";

export let autofill_controller = {
  get_industry_type_list : (req, res) => {
    autofill_model.get_industry_type_list().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_duration: (req, res) => {
    autofill_model.get_duration().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_employment_type: (req, res) => {
    autofill_model.get_employment_type().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_job_type: (req, res) => {
    autofill_model.get_job_type().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_positions: (req, res) => {
    autofill_model.get_positions().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_eligibility_types:  (req, res) => {
    autofill_model.get_eligibility_types().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_grade_scales: (req, res) => {
    autofill_model.get_grade_scales().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_gender: (req, res) => {
    autofill_model.get_gender().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_major: (req, res) => {
    autofill_model.get_major().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_schools: (req, res) => {
    autofill_model.get_schools().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_colleges: (req, res) => {
    autofill_model.get_colleges().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_programs: (req, res) => {
    autofill_model.get_programs().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_designations: (req, res) => {
    autofill_model.get_designations().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  },

  get_organizations: (req, res) => {
    autofill_model.get_organizations().then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error!",
        error: err
      })
    })
  }
}
