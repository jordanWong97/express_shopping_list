const supertest = require('supertest');

const db = require('./fakeDb');

const app = require('./app');
const { request } = require('./app');


describe("GET /", function(){
  it("valid", async function(){
    const resp = await request(app).get("/items");
    expect(resp.body).toEqual([{ "name": "popsicle", "price": 1.45 }])
  })
})

