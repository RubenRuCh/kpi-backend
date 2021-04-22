module.exports = (sequelize, Sequelize) => {
  const KPIField = sequelize.define('kpi_field', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT
    }
  });

  return KPIField;
};
