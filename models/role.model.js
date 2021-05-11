module.exports = (sequelize, Sequelize) => {
    const ROLE = sequelize.define('roles',
      {
        role: {
          type: Sequelize.STRING,
        },
        service: {
          type: Sequelize.TEXT,
        }
      });
  
    return ROLE;
  };
  