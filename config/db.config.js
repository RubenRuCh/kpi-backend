module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '123456',
  DB:
    process.env.NODE_ENV == 'test'
      ? 'kpis_management_test'
      : 'kpis_management_dev',
  dialect: 'postgres',
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
