module.exports = (sequelize, Sequelize) => {
  const Conf = sequelize.define('conf', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    value: {
      type: Sequelize.STRING
    },
    dependencie: {
      type: Sequelize.STRING
    }
  });

  return Conf;
};
