module.exports = (sequelize, Sequelize) => {
  const KPIField = sequelize.define('kpi_field', {
    value: {
      type: Sequelize.STRING,
    },
  });

  return KPIField;
};
