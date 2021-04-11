module.exports = (sequelize, Sequelize) => {
  const Field = sequelize.define('field', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    required: {
      type: Sequelize.BOOLEAN,
    },
    type: {
      type: Sequelize.STRING,
    },
    values: {
      type: Sequelize.ARRAY(Sequelize.STRING), // Only available in postgres
    },
    maxlength: {
      type: Sequelize.INTEGER,
    },
  });

  return Field;
};
