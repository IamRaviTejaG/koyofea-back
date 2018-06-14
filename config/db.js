const dotenv = require("dotenv").config()
import * as mysql from "promise-mysql"
var colors = require('colors');
const Bluebird = require("bluebird")
let dbname

switch (process.env.NODE_ENV) {
    case "test":
        dbname = "koyofea_test"
        break
    case "development":
        dbname = "koyofeav1"
        break
    case "production":
        dbname = "koyofea_production"
        break
    default:
        dbname = "koyofeav1"     
}   

const dbAddress = process.env.DB_HOST || "127.0.0.1"
const dbPort = process.env.DB_PORT || 3306

let connection = mysql.createPool({
    connectionLimit: 100,
    host     : dbAddress,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : dbname
  })

let pool = Bluebird.promisifyAll(connection);

export function getConnection() {
    return pool.getConnection().disposer(function(connection) {
        pool.releaseConnection(connection);
      });
}