var chai = require("chai")
var assert = chai.assert
let mysql = require("promise-mysql")
const dotenv = require("dotenv").config()

describe("Access to DB", () => {
    describe("#createConnection", () => {
        it("should createConnection to mysql", () => {
            return mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: 'koyofeav1'
            }).then((con) => { con.end() })
        })
    })
})