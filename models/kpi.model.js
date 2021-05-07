module.exports = (sequelize, Sequelize) => {
  const KPI = sequelize.define('kpi', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    enabled: {
      type: Sequelize.BOOLEAN,
    },
    service: {
      type: Sequelize.TEXT,
    }
  });

  return KPI;
};
