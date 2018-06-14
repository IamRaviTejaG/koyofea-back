
var Promise = require("bluebird");
import * as pool from "../config/db"
import { resolve } from "url";

let query = (sql) => {
    return new Promise ((resolve, reject) => {
        Promise.using(pool.getConnection(), function(connection) {
            return connection.query(sql).then(function(rows) {
              resolve(rows)
            }).catch(function(error) {
              reject(error)
            });
        })
    })
}

export default (app) => {
    app.get("/", (req, res) => { 
        query('show tables').then((result) => {
            console.log(result)
        }).catch((err) => {
            throw err
        });
        res.status(200).json({message: "welcome to api testing"})
    })

    // If no route is matched by now, it must be a 404
    app.use((req, res, next) => {
        res.status(404).json({ "error": "Endpoint not found" });
        next();
    });

    app.use((error, req, res, next) => {
        if (process.env.NODE_ENV === "production") {
            return res.status(500).json({ "error": "Unexpected error: " + error });
        }
        next(error);
    });
}