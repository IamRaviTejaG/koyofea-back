export const router = require("express").Router()
var Promise = require("bluebird");
import * as pool from "../config/db"


import routes from "./routes"
routes()

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



// If no route is matched by now, it must be a 404
router.use((req, res, next) => {
  res.status(404).json({ "error": "Endpoint not found" });
  next();
});

router.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(500).json({ "error": "Unexpected error: " + error });
  }
  next(error);
});
