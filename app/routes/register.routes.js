const authorize = require('../helpers/authorize');

module.exports = (app) => {
    const registers = require('../controllers/register.controller.js');
  
    var router = require('express').Router();
  
    // Create a new Register
    router.post('/', authorize(), registers.create);
  
    // Retrieve all Registers
    router.get('/', authorize(), registers.findAll);
  
    // Retrieve a single Register with id
    router.get('/:id', authorize(), registers.findOne);
  
    // Update a Register with id
    router.put('/:id', authorize(), registers.update);
  
    // // Delete a Register with id
    router.delete('/:id', authorize(), registers.delete);
  
    app.use('/api/registers', router);
  };
  