'use strict';

const db = require('../models/index.js');
const Op = db.Sequelize.Op;
const ROL = db.roles;



module.exports = {
  up: async (queryInterface, Sequelize) => {

    const arrayValues = [];

    const values = await ROL.findAll({ attributes: ['service'], where: { service: { [Op.ne]: '--', } }, group: ['service'] });


    for (let i in values) {

      arrayValues.push(values[i].service);

    }

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('confs', [
      {
        title: 'SERVICES_CONTROLLER',
        description: 'Controlador Servicios',
        value: null,
        dependencie: 'fields',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // Insert all services obtained from roles table in DB
    return await queryInterface.bulkInsert('fields', [
      {
        title: 'Servicio',
        description: 'Servicio del KPI',
        required: true,
        type: 'radio',
        values: arrayValues,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('confs', null, {});
    return await queryInterface.bulkDelete('fields', null, {});
  }
};
