const authorize = require('../helpers/authorize');

module.exports = app => {
    const users = require('../controllers/user.controller.js');
  
    var router = require('express').Router();
  
    // Create a new USER
    //router.post('/', authorize('Admin'), users.create);

    // Update an existing USER
    router.post('/update/:id', authorize(), users.update);

    // Authenticate existing user
    //router.post('/authenticate', users.authenticate);
  
    // Retrieve all USERS
    router.get('/', users.findAll);
  
    // Retrieve a single USER with id
    router.get('/:id', authorize(), users.findOne);

    // Delete a USER with id
    router.delete('/delete/:id', authorize('Admin'), users.delete);

    app.use('/api/users', router);
  };
  