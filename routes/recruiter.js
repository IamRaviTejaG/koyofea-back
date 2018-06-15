export const recruiter = require("express").Router()
import { query } from "./index"
export default () => {
  recruiter.get("/", (req, res) => { 
    query('show tables').then((result) => {
    }).catch((err) => {
      throw err
    });
    res.status(200).json({message: "welcome to recruiter api testing"})
  })
}