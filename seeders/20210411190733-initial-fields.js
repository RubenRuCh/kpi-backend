'use strict';

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
    return await queryInterface.bulkInsert('Fields', [
      {
        title: 'Identificador',
        description: 'Identificador del KPI',
        required: true,
        type: 'text',
        values: null,
        maxlength: 20,
      },
      {
        title: 'Área del Gobierno',
        description: 'Área del Gobierno a la que corresponde el indicador',
        required: false,
        type: 'textarea',
        values: null,
        maxlength: null,
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
};
