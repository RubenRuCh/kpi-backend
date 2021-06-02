'use strict';

const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        username: 'carlos',
        firstname: 'Carlos',
        lastname: 'Tarrazona',
        role: 'Admin',
        service: '--',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'carlos_servicio',
        firstname: 'Carlos de Servicio',
        lastname: 'Tarrazona Valderrama',
        role: 'Servicio',
        service: 'Agua',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'raul',
        firstname: 'Raul',
        lastname: 'Oriol',
        role: 'Admin',
        service: '--',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ruben',
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
