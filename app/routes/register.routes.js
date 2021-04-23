module.exports = (app) => {
  const registers = require('../controllers/register.controller.js');

  var router = require('express').Router();

  // Create a new Register
  router.post('/', registers.create);

  // Retrieve all Registers
  router.get('/', registers.findAll);

  // Retrieve a single Register with id
  router.get('/:id', registers.findOne);

  // Update a Register with id
  router.put('/:id', registers.update);

  // // Delete a KPI with id
  // router.delete('/:id', kpis.delete);

  // // Delete all KPI
  // router.delete('/', kpis.deleteAll);

  app.use('/api/registers', router);
};
