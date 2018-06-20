const Bluebird = require("bluebird")
const colors = require('colors')
const dotenv = require("dotenv").config()
import * as mysql from "promise-mysql"

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
  port     : dbPort,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : dbname
})

export let db = Bluebird.promisifyAll(connection)

export function getConnection() {
  return db.getConnection().disposer((connection) => {
    db.releaseConnection(connection)
  })
}

export let query = (sql) => {
  return new Bluebird ((resolve, reject) => {
    Bluebird.using(getConnection(), (connection) => {
      return connection.query(sql).then((rows) => {
        let data = {}
        if (rows.length) {
          for (var i=0; i<rows.length; i++)
            data[i] = JSON.parse(JSON.stringify(rows[i]))
        }
        resolve(data)
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  })
}

export let process_query = (sql) => {
  return new Promise((resolve, reject) => {
    query(sql).then((result) => {
      console.log(result)
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
