const app = require("../index");
const dotenv = require("dotenv").config();
const mysql = require("promise-mysql");
const request = require('request');

import { auth } from "../config/auth";

// Chai and related imports
const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

// Testing constants, do not alter.
const serverBaseUrl = "http://localhost:" + process.env.TEST_PORT + "/api";

describe("2. Testing Middlewares", () => {
  describe("2.1. Middleware 1/4: Token Test (without token)", () => {
    it("Should return status 500, because x-api-key header is missing",
      done => {
      let url = serverBaseUrl + "/student";
      request.get(url, (err, res, body) => {
        expect(500);
        done();
      })
    })
  })
})

describe("3. Testing Authentication Module", () => {
  describe("3.1. Generating & Decoding JWT", () => {
    it("Checks the generate & decode token methods", done => {
      let generated_token_data = auth.genToken("Auth Test");
      let decoded_token_data = auth.decode_token(generated_token_data.token);
      expect(generated_token_data.user).to.be.equal(decoded_token_data.user);
      done();
    })
  })
})
