const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Campus = db.model('campus');

describe('Campus routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });
  describe('/api/campus/', () => {
  })
})
