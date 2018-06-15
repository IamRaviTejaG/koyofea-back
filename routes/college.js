export const college = require("express").Router()
import { query } from "./index"
export default () => {
  college.get("/", (req, res) => { 
    query('show tables').then((result) => {
    }).catch((err) => {
      throw err
    });
    res.status(200).json({message: "welcome to college api testing"})
  })
}