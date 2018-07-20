export const autofill_collections = require("express").Router()
import { autofill_collections_controller } from "../modules/common/autofill_collections/autofill_collections_controller";

export default () => {
  // Autofill ROUTES WITH /collections PREFIX RETURN ARRAYS of OBJECTS.
  autofill_collections.route('/education')
    .get(autofill_collections_controller.get_education)

  autofill_collections.route('/experience')
    .get(autofill_collections_controller.get_experience)
}
