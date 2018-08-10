const app = require("../index");
const dotenv = require("dotenv").config();
const mysql = require("promise-mysql");
const request = require('request');

// Testing constants, do not alter.
const serverBaseUrl = "http://localhost:" + process.env.TEST_PORT + "/api";

// Chai related imports
const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

describe("1. Testing Connections", () => {
  describe("1.1. Server Alive Test", () => {
    it("Checks if the server is alive", done => {
      request.get(serverBaseUrl, (err, res, body) => {
        body = JSON.parse(body);
        expect(body.message).to.equal("API TEST: WORKING FINE");
        expect(200);
        done();
      })
    })
  })

  describe("1.2. Access to DB", () => {
    it("Checks if the server can successfully connect to DB", done => {
      mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'koyofea_test'
      }).then(con => {
        con.end();
        done();
      }).catch(err => {
        done(err);
      })
    })
  })
})
