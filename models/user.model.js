module.exports = (sequelize, Sequelize) => {
    const USER = sequelize.define('users', {
  
      username: {
        type: Sequelize.STRING,
      },
      firstname: {
        type: Sequelize.TEXT,
      },
      lastname: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.STRING,
      },
      service: {
        type: Sequelize.TEXT,
      }
    });
  
    return USER;
  };
  