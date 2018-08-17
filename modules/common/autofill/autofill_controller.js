import { autofillModel } from './autofill_model'
import { fun } from '../index'

export let autofillController = {
  getDuration: (req, res) => {
    autofillModel.getDuration().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getEmploymentType: (req, res) => {
    autofillModel.getEmploymentType().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getIndustryTypeList: (req, res) => {
    autofillModel.getIndustryTypeList().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getJobType: (req, res) => {
    autofillModel.getJobType().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getPositions: (req, res) => {
    autofillModel.getPositions().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getEligibilityTypes: (req, res) => {
    autofillModel.getEligibilityTypes().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getGradeScales: (req, res) => {
    autofillModel.getGradeScales().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getGender: (req, res) => {
    autofillModel.getGender().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getMajor: (req, res) => {
    autofillModel.getMajor().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getSchools: (req, res) => {
    autofillModel.getSchools().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getColleges: (req, res) => {
    autofillModel.getColleges().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getPrograms: (req, res) => {
    autofillModel.getPrograms().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getDesignations: (req, res) => {
    autofillModel.getDesignations().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  },

  getOrganizations: (req, res) => {
    autofillModel.getOrganizations().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'server error!',
        error: err
      })
    })
  }
}
