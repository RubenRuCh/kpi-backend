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
