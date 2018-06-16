export const student = require("express").Router()
import { query } from "./index"
export default () => {
  student.get("/", (req, res) => {
    query('show tables').then((result) => {
    }).catch((err) => {
      throw err
    });
    res.status(200).json({message: "welcome to student api testing"})
  })
}
