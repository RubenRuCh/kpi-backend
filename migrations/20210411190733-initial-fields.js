'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert('fields', [
      {
        title: 'Identificador',
        description: 'Identificador del KPI',
        required: true,
        type: 'text',
        values: null,
        maxlength: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Servicio',
        description: 'Servicio del KPI',
        required: true,
        type: 'text',
        values: ['Agua', 'Poblacion', 'Alumbrado'],
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Área del Gobierno',
        description: 'Área del Gobierno a la que corresponde el indicador',
        required: false,
        type: 'textarea',
        values: null,
        maxlength: null,
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
    return await queryInterface.bulkDelete('Fields', null, {});
  },

  /*down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     *
    return await queryInterface.bulkDelete('Fields', null, {});
  },*/

};
