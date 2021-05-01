module.exports = (sequelize, Sequelize) => {
    const RegisterValue = sequelize.define('register_value', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value_label: {
        type: Sequelize.STRING,
      },
    });
  
    return RegisterValue;
  };
  