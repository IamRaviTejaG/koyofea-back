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
  recruiter_add: [
    check('name').exists(),
    check('website_url').exists(),
    check('description').exists(),
    check('verified').isEmpty().withMessage("User cannot verifiy Email"),
    check('phone').exists().isInt(),
    check('address_1').exists(),
    check('landmark').exists(),
    check('city').exists(),
    check('state').exists(),
    check('country').exists(),
    check('pin').exists().isInt(),
    check('recruiter_hr_id').isEmpty(),
    check('size').exists().isString()
  ],
  recruiter_update: [
    check('name').isEmpty(),
    check('verified').isEmpty().withMessage("User cannot verifiy Email"),
    check('recruiter_hr_id').isEmpty()
  ]
}