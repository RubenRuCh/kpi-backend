module.exports = app => {
  const auth = require('../controllers/auth.controller.js');

  var router = require('express').Router();

  // Try to login using LDAP
  router.post('/', auth.login);

  app.use('/api/auth', router);
};
