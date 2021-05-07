module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '1234',
  DB:
    process.env.NODE_ENV == 'production'
      ? 'kpis_management_production'
      : 'kpis_management_dev',
  dialect: 'postgres',
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
