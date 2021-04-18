const request = require('supertest');
const app = require('../server');

describe('Home endpoint', () => {
  it('should return welcome message', async done => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('message', 'Welcome to KPI application');
    done();
  });
});
