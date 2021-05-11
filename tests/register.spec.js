const request = require('supertest');
const app = require('../server');

describe('register endpoint', () => {
  it('/ post should create a new register', async done => {
    // Create a register
    const register = {
      value: 'register test',
      columns:[],
      kpiId:1,
      fieldId:1
    
    };

    const res = await request(app)
      .post('/api/registers/')
      .send(register);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).toHaveProperty('value');
    expect(res.body).toHaveProperty('id');
    done();
  });

   it('/ get should get all registers as array of objects', async done => {
    const res = await request(app).get('/api/registers/');
    expect(res.statusCode).toEqual(200);
    done();
  });

  it('/:id put should update register', async done => {
    // Update a register
    const register = {
      id: 1,
      value: 'register test changed',
      columns:[],
      kpiId:1,
      fieldId:1
    };

    const res = await request(app)
      .put('/api/registers/1')
      .send(register);
    expect(res.statusCode).toEqual(200);
    done();
  }); 
});
