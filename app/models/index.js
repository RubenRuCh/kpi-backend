const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// KPI
db.kpis = require('./kpi.model.js')(sequelize, Sequelize);

// Field
db.fields = require('./field.model.js')(sequelize, Sequelize);

// KPIField
db.kpiFields = require('./kpi_field.model.js')(sequelize, Sequelize);

db.kpis.belongsToMany(db.fields, { through: db.kpiFields }); // kpiId
db.fields.belongsToMany(db.kpis, { through: db.kpiFields }); // fieldId

module.exports = db;
