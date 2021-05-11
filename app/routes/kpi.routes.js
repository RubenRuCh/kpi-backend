const authorize = require('../helpers/authorize');

module.exports = app => {
  const kpis = require('../controllers/kpi.controller.js');

  var router = require('express').Router();

  // Create a new KPI
  router.post('/', authorize('Admin'), kpis.create);

  // Retrieve all KPIs
  router.get('/', authorize(), kpis.findAll);

  // Retrieve all enabled KPIs
  router.get('/enabled', authorize(), kpis.findAllEnabled);

  // Retrieve a single KPI with id
  router.get('/:id', authorize(), kpis.findOne);

  // Update a KPI with id
  router.put('/:id', authorize('Admin'), kpis.update);

  // Disable a KPI with id
  router.put('/:id/disable', authorize('Admin'), kpis.disable);

  // Enable a KPI with id
  router.put('/:id/enable', authorize('Admin'), kpis.enable);

  // // Delete a KPI with id
  // router.delete('/:id', kpis.delete);

  // // Delete all KPI
  // router.delete('/', kpis.deleteAll);

  app.use('/api/kpis', router);
};
