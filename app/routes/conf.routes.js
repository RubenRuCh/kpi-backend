module.exports = app => {
  const conf = require('../controllers/conf.controller.js');

  var router = require('express').Router();

  // Retrieve all confs parameters
  router.get('/', conf.findAll);

  // Update a conf parameter with id
  router.put('/:id', conf.update);

  app.use('/api/conf', router);
};
