'use strict';

const { Sequelize } = require("sequelize");

module.exports = {

  up: async(queryInterface, Sequelize) => {
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
        username: 'valentin',
        firstname: 'Valetnin',
        lastname: 'Chaveli',
        role: 'Servicio',
        service: 'Agua',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
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