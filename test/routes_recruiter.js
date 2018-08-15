// const dotenv = require("dotenv").config();
// const mysql = require("promise-mysql");
// const request = require('request');
//
// // Chai and related imports
// const chai = require("chai");
// const should = chai.should();
// const expect = chai.expect;
//
// // Testing constants, do not alter.
// const serverBaseUrl = "http://localhost:" + process.env.TEST_PORT + "/api";
//
// describe("4. Testing Routes: Endpoint /", () => {
//   describe("4.1. Middleware 1/4: Token Test (without token)", () => {
//     it("Should return status 500, because x-api-key header is missing",
//       done => {
//       let url = serverBaseUrl + "/student";
//       request.get(url, (err, res, body) => {
//         expect(500);
//         done();
//       })
//     })
//   })
// })
//
// describe("5. Testing Authentication Module", () => {
//   describe("5.1. Generating & Decoding JWT", () => {
//     it("Checks the generate & decode token methods", done => {
//       done();
//     })
//   })
// })
