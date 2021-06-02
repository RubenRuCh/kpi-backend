const config = require('./secret.json');

const jwt = require('jsonwebtoken');
const db = require('../../models');

const USER = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new USER
exports.create = async (req, res) => {
  const user = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: req.body.role,
    service: req.body.service
  };

  // Save USER in the database
  try {
    const createdUser = await USER.create(user);

    res
      .status(200)
      .send({ status: 200, message: 'Usuario creado correctamente' });
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the USER.'
    });
  }
};

// Add a token to final USER info
exports.createCurrentUser = user => {
  const token = jwt.sign(
    { sub: user.id, role: user.role, service: user.service },
    config.secret
  );

  user.token = token;

  const userFinal = user;

  return userFinal;
};

// Update a current USER
exports.update = (req, res) => {
  const id = req.params.id;

  const userdata = {
    id: id,
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: req.body.role,
    service: req.body.service == undefined ? '--' : req.body.service
  };

  USER.update(req.body, {
    where: { id: id }
  })

    .then(user => {
      const userFinal = this.createCurrentUser(userdata);

      res.status(200).send({ status: 200, body: userFinal });
    })

    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all USERS from the database
exports.findAll = (req, res) => {
  USER.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

// Delete a KPI with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  USER.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'USER was deleted successfully!'
        });
      } else {
        res.status(404).send({
          message: `Cannot delete USER with id=${id}. Maybe USER was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete USER with id=' + id
      });
    });
};

// Find a single USER with an id
exports.findOne = (req, res) => {
  const currentUser = req.user;

  const id = parseInt(req.params.id);

  if (id !== parseInt(currentUser.sub) && currentUser.role !== 'Admin') {
    return res
      .status(401)
      .json({ message: 'No tienes permisos para hacer esto' });
  } else {
    USER.findByPk(id)
      .then(data => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).json({ message: 'El usuario buscado no existe' });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Error al buscar al usuario ' + id
        });
      });
  }
};

//Authenticate a user comparing DATA in DB
exports.authenticateUser = async (user,passwd) => {
  const userdata = await USER.findAll({
    where: { [Op.and]: [
      {username: user},
      {password: passwd}
    ] }
  });

  const userFinal = this.createCurrentUser(userdata[0].toJSON());

  return userFinal;
};
