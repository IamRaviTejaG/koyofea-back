import { check, validationResult } from "express-validator/check";


export const validate = {
  error_handling: (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return  res.status(400).json({ message: "Error!", error: errors.mapped() })
    }
    next()
  },

  recruiter_hr_add:  [
    check('first_name').exists(),
    check('last_name').exists(),
    check('email').exists().isEmail(),
    check('email_verified').isEmpty(),
    check('linkedin').isBoolean(),
  ],
  // TODO || masti
  recruiter_hr_update: [
    check('email').isEmpty().withMessage("Email cannot be updated")
  ],
  recruiter_add_new: [
    check('recruiter.name').exists(),
    check('recruiter.id').exists(),

    check("recruiter_data.name").exists(),
    check('recruiter_data.website_url').exists(),
    check('recruiter_data.description').exists(),
    check('recruiter_data.verified').isEmpty().withMessage("User cannot verifiy Email"),
    check('recruiter_data.phone').exists().isInt(),
    check('recruiter_data.address_1').exists(),
    check('recruiter_data.landmark').exists(),
    check('recruiter_data.city').exists(),
    check('recruiter_data.state').exists(),
    check('recruiter_data.country').exists(),
    check('recruiter_data.pin').exists().isInt(),
    check('recruiter_data.recruiter_hr_id').isEmpty(),
    check('recruiter_data.size').exists().isString(),
    check('recruiter_data.industry_id').exists().isInt()
  ],

  recruiter_add_old: [
    check('name').exists(),
    check('id').exists().isInt(),
    check('recruiter_data').isEmpty(),
  ],

  recruiter_update: [
    check('name').isEmpty(),
    check('industry_id').isEmpty(),
    check('verified').isEmpty().withMessage("User cannot verifiy Email"),
    check('recruiter_hr_id').isEmpty()
  ]
}