import { autofillCollectionsController } from '../modules/common'
export const autofillCollections = require('express').Router()

export default () => {
  autofillCollections.route('/education')
    .get(autofillCollectionsController.getEducation)

  autofillCollections.route('/experience')
    .get(autofillCollectionsController.getExperience)
}
