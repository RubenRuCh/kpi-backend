const db = require('../../models');
const Conf = db.conf;
const Op = db.Sequelize.Op;

// Retrieve all conf parameters from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Conf.findAll({ where: condition })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving configuration parameters.'
      });
    });
};

// Update a conf parameter by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Update conf parameter
  const conf = {
    value: req.body.value
  };

  Conf.update(conf, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'Conf was updated successfully.'
        });
      } else {
        res.status(404).send({
          message: `Cannot update Conf with id=${id}. Maybe Conf was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Conf with id=' + id
      });
    });
};
