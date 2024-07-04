const request = require('supertest');
const express = require('express');
const { expect } = require('chai');

// Configuration de l'application Express
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Tests
describe('GET /', () => {
  it('should respond with Hello World!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        expect(res.status).to.equal(200);
        done();
      });
  });
});
