'use strict';

const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        username: 'carlos',
        password: '1234',
        firstname: 'Carlos',
        lastname: 'Tarrazona',
        role: 'Admin',
        service: '--',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'carlos_servicio',
        password: '1234',
        firstname: 'Carlos de Servicio',
        lastname: 'Tarrazona Valderrama',
        role: 'Servicio',
        service: 'Agua',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'raul',
        password: '1234',
        firstname: 'Raul',
        lastname: 'Oriol',
        role: 'Admin',
        service: '--',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ruben',
        password: '1234',
        firstname: 'Rubén',
        lastname: 'Rüger Chambra',
        role: 'Admin',
        service: '--',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('users', null, {});
  },
};
