export const basic = require("express").Router()
var Promise = require("bluebird");
import * as pool from "../config/db"


import recruiter from "./recruiter"
import student from "./student"
import college from "./college"
recruiter()
student()
college()

export let query = (sql) => {
  return new Promise ((resolve, reject) => {
    Promise.using(pool.getConnection(), (connection) => {
      return connection.query(sql).then( (rows) => {
        resolve(rows)
      }).catch(function(error) {
        reject(error)
      });
    })
  })
}

basic.get("/", (req, res) => { 
  query('show tables').then((result) => {
  }).catch((err) => {
    throw err
  });
  res.status(200).json({message: "welcome to api testing"})
})

// // If no route is matched by now, it must be a 404
// basic.use((req, res, next) => {
//   res.status(404).json({ "error": "Endpoint not found" });
//   next();
// });

// basic.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "production") {
//     return res.status(500).json({ "error": "Unexpected error: " + error });
//   }
//   next(error);
// });
