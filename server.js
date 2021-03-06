const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

var corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

db.sequelize.sync(); // Production

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db');
// }); // Develop

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to KPI application' });
});

// Include routes
require('./app/routes/conf.routes')(app); // Conf routes
require('./app/routes/auth.routes')(app); // Auth routes
require('./app/routes/kpi.routes')(app); // KPI routes
require('./app/routes/field.routes')(app); // Field routes
require('./app/routes/register.routes')(app); // Register routes
require('./app/routes/user.routes')(app); // User routes
require('./app/routes/role.routes')(app); // Role routes

module.exports = app;
