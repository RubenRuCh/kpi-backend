'use strict';


const db = require('../models/index.js');
const Op = db.Sequelize.Op;
const ROL = db.roles;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const arrayValues = [];

    const values = await ROL.findAll({
      attributes: ['service'],
      where: { service: { [Op.ne]: '--' } },
      group: ['service']
    });

    for (let i in values) arrayValues.push(values[i].service);

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
        fillable: false,
        type: 'radio',
        values: arrayValues,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Identificador',
        description: 'Identificador del KPI',
        required: true,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Área de Gobierno',
        description: 'Área de Gobierno relacionada',
        required: false,
        fillable: false,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Delegación',
        description: 'Delegación relacionada',
        required: false,
        fillable: false,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Unidad de medida',
        description: 'Unidad que determina los valores de los registros',
        required: true,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 255,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Periodicidad de cálculo',
        description: 'Periodicidad de introducción de los registros',
        required: true,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 255,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tendencia deseada',
        description: 'Tendencia objetivo',
        required: false,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 255,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Valor objetivo',
        description: 'Valor objetivo del KPI',
        required: false,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 255,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Umbral amarillo',
        description: 'Umbral amarillo del KPI',
        required: false,
        fillable: false,
        type: 'text',
        values: null,
        maxlength: 255,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Desagregación 1',
        description: 'Primer tipo de desagregación',
        required: false,
        fillable: true,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Desagregación 2',
        description: 'Segundo tipo de desagregación',
        required: false,
        fillable: true,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Desagregación 3',
        description: 'Tercer tipo de desagregación',
        required: false,
        fillable: true,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Desagregación 4',
        description: 'Cuarto tipo de desagregación',
        required: false,
        fillable: true,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mecanismo de integración',
        description: 'Integración utilizada',
        required: false,
        fillable: false,
        type: 'textarea',
        values: null,
        maxlength: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Persistencia',
        description: 'Persistencia del KPI',
        required: true,
        fillable: false,
        type: 'radio',
        values: ['CB', 'BBDD'],
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
