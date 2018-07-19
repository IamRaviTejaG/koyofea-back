import { query } from "../../config/db";

export let auto_fill = {
  industry_type_list : (req, res) => {
    let sql = `SELECT id, name FROM industry`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_duration: (req, res) => {
    let sql = `SELECT id, name FROM recruiter_drive_duration`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_employment_type: (req, res) => {
    let sql = `SELECT id, name FROM employment_type`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_job_type: (req, res) => {
    let sql = `SELECT id, name FROM job_type`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_positions: (req, res) => {
    let sql = `SELECT id, name FROM position`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_eligibility_types:  (req, res) => {
    let sql = `SELECT id, name FROM eligibility_type`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_grade_scales: (req, res) => {
    let sql = `SELECT id FROM grade_scale`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_gender: (req, res) => {
    let sql = `SELECT id, name FROM gender`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_major: (req, res) => {
    let sql = `SELECT id, name FROM major`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_schools: (req, res) => {
    let sql = `SELECT DISTINCT sed.institute_name from student_education sed`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_colleges: (req, res) => {
    let sql = `SELECT DISTINCT col.name from college col`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_programs: (req, res) => {
    let sql = `SELECT id, name FROM program`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  }
}
