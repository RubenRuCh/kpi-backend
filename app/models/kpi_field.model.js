const Field = require('./field.model');
const KPI = require('./kpi.model');

module.exports = (sequelize, Sequelize) => {
  const KPIField = sequelize.define('kpi_field', {
    value: {
      type: Sequelize.STRING,
    },
  });

  // One to many relation using KPIField
  return KPIField;
};
