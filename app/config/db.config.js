module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '123456',
  DB: 'testdb',
  dialect: 'postgres',
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
