import { autofillModel } from './autofill_model'
import { fun } from '../index'

export let autofillController = {
  getDuration: (req, res) => {
    autofillModel.getDuration().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
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
        message: 'Server Error!',
        error: err
      })
    })
  },

  getJobLocations: (req, res) => {
    autofillModel.getJobLocations().then(result => {
      result = fun.singleObjectToArray(result)
      res.status(200).json({data: result})
    }).catch(err => {
      res.status(500).json({
        message: 'Server Error!',
        error: err
      })
    })
  }
}
