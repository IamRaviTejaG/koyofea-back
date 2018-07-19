import { query } from "../../config/db";

export let auto_fill = {
  get_industry_type_list : (req, res) => {
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
  },

  get_designations: (req, res) => {
    let sql = `SELECT DISTINCT sexp.designation FROM student_experience sexp`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_organizations: (req, res) => {
    let sql = `SELECT DISTINCT sexp.organization_name
              FROM student_experience sexp`
    query(sql).then(result => {
      res.status(200).json(result)
    }).catch(err => {
      res.status(500).json({
        message: "Server Error",
        error: err
      })
    })
  },

  get_education_collection: (req, res) => {
    let edu_array = []
    async function create_edu_array () {
      let sql = `SELECT DISTINCT sed.institute_name from student_education sed`
      let res1 = await query(sql)
      edu_array.push(res1)
      sql = `SELECT id FROM grade_scale`
      let res2 = await query(sql)
      edu_array.push(res2)
      sql = `SELECT DISTINCT col.name from college col`
      let res3 = await query(sql)
      edu_array.push(res3)
      sql = `SELECT id, name FROM major`
      let res4 = await query(sql)
      edu_array.push(res4)
      sql = `SELECT id, name FROM program`
      let res5 = await query(sql)
      edu_array.push(res5)
      res.status(200).json(edu_array)
    }
    create_edu_array()
  },

  get_experience_collection: (req, res) => {
    let exp_array = []
    async function create_exp_array () {
      let sql = `SELECT DISTINCT sexp.designation FROM student_experience sexp`
      let res1 = await query(sql)
      exp_array.push(res1)
      sql = `SELECT DISTINCT sexp.organization_name
            FROM student_experience sexp`
      let res2 = await query(sql)
      exp_array.push(res2)
      res.status(200).json(exp_array)
    }
    create_exp_array()
  }
}
