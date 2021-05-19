const app = require('./server');

// set port, listen for requests
const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;
