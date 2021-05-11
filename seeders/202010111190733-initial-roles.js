'use strict';

const { Sequelize } = require("sequelize");

module.exports = {

    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('roles', [
          {
            role: 'Admin',
            service: '--',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            role: 'Servicio',
            service: 'Agua',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            role: 'Servicio',
            service: 'Poblacion',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            role: 'Servicio',
            service: 'Alumbrado',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('roles', null, {});
  },

};



