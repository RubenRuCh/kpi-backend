module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define('register', {
      value: {
        type: Sequelize.STRING,
      },
    });
  
    return Register;
  };
  