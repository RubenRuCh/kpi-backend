'use strict';

// const db = require('../models/index.js');

// const ROL = db.roles;

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

    return await queryInterface.bulkInsert('fields', [
      {
        title: 'Servicio',
        description: 'Servicio del KPI',
        required: true,
        fillable: false,
        type: 'radio',
        values: ['Agua', 'Poblacion', 'Alumbrado'],
        // TODO Delete
        // Si lo que quieres es que esten sincronizados los valores de la tabla ROL con los distintos valores a elegir en el Field enganchado (Servicio),
        // puedes hacer que en controllers/conf.controller.js metodo update se cambie values del field por la respuesta de la consulta de ROL.findAll atributes service etc.
        // Asi cada vez que se actualice el field que va a llevar los servicios, se actualizara automaticamente los distintos valores disponibles.
        // Otra opcion es que donde sea que vayas a necesitar los distintos servicios, lo saques de los values que tenga el field enganchado
        // con SERVICES_CONTROLLER (ver explicacion en frontend/views/ConfList.vue)
        // Como ves tienes varias formas de hacerlo, elige la que se adapte mejor a las necesidades de tu parte del proyecto
        // values: await ROL.findAll({ attributes: ['service'],where: { service: { [Op.ne]: '--', }}, group: ['service'] })

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
