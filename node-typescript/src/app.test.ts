const request = require("supertest");
const express = require("express");
const { app, server } = require("./app");

describe("Smoke test", function () {
  test("responds with correct text", function (done) {
    console.log("test start");

    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.text).toInclude("Node with TypeScript");
        return done();
      });
  });
});

afterAll((done) => {
  server.close();
  done();
});
