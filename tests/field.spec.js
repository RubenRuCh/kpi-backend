const request = require('supertest');
const app = require('../server');

describe('Field endpoint', () => {
  it('/ post should create a new field', async done => {
    // Create a Field
    const field = {
      title: 'Field test',
      description: 'This is a test description',
      required: true,
      type: 'test',
      values: null,
      maxlength: 20
    };

    const res = await request(app)
      .post('/api/fields/')
      .send(field);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('id');
    done();
  });

  it('/ get should get all fields as array of objects', async done => {
    const res = await request(app).get('/api/fields/');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    done();
  });

  it('/:id put should update field', async done => {
    // Update a Field
    const field = {
      id: 1,
      title: 'Field test changed',
      description: 'This is a test description',
      required: false,
      type: 'test',
      values: null,
      maxlength: 20
    };

    const res = await request(app)
      .put('/api/fields/1')
      .send(field);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      'message',
      'Field was updated successfully.'
    );
    done();
  });
});
