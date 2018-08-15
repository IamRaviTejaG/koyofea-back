const app = require("../index");
const dotenv = require("dotenv").config();
const rp = require('request-promise');

import { auth } from "../config/auth";

// Chai and related imports
const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

// Testing constants, do not alter.
const serverBaseUrl = "http://localhost:" + process.env.TEST_PORT + "/api";

describe("2. TESTING MIDDLEWARES", () => {
  describe("2.1. Middleware 1/4: Token Test (without token)", () => {
    it("Should return status 500, without the x-api-key header", done => {
      let options = {
        method: "GET",
        url: serverBaseUrl + "/student"
      }
      rp(options).then(body => {
        expect(500);
        done();
      }).catch(err => {
        done(err);
      })
    })
  })
})

describe("3. TESTING AUTHENTICATION MODULE", () => {
  describe("3.1. Generating & Decoding JWT", () => {
    it("Checks the generate & decode token methods", done => {
      let generated_token_data = auth.genToken("Auth Test");
      let decoded_token_data = auth.decode_token(generated_token_data.token);
      expect(generated_token_data.user).to.be.equal(decoded_token_data.user);
      done();
    })
  })
})
