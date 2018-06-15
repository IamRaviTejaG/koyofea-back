import {app, request } from "./index"

describe("# Routes", () => {
  it(" Should get status 200", () => {
  return request("http://localhost:1619")
  .get("/")
    .expect(200)
  })
})
