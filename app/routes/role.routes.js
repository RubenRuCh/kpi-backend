const authorize = require('../helpers/authorize');

module.exports = app => {
    const roles = require('../controllers/role.controller.js');

    var router = require('express').Router();

    // Retrieve all roles
    router.get('/', authorize('Admin'), roles.findAllRoles);

    // Retrieve all services
    router.get('/services', roles.findAllservices);

    app.use('/api/roles', router);
}