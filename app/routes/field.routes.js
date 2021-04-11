module.exports = (app) => {
  const fields = require('../controllers/field.controller.js');

  var router = require('express').Router();

  // Create a new Field
  router.post('/', fields.create);

  // Retrieve all Fields
  router.get('/', fields.findAll);

  // Retrieve a single Field with id
  router.get('/:id', fields.findOne);

  // Update a Field with id
  router.put('/:id', fields.update);

  // // Delete a Field with id
  // router.delete('/:id', fields.delete);

  // // Delete all Field
  // router.delete('/', fields.deleteAll);

  app.use('/api/fields', router);
};
