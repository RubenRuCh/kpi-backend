const db = require('../../models');
const Field = db.fields;
const Op = db.Sequelize.Op;

// Create and Save a new Field
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  // Create a Field
  const field = {
    title: req.body.title,
    description: req.body.description,
    required: req.body.required ? req.body.required : false,
    fillable: req.body.fillable ? req.body.fillable : false,
    type: req.body.type,
    values: req.body.values,
    maxlength: req.body.maxlength
  };

  // Save Field in the database
  Field.create(field, { isNewRecord: true })
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Field.'
      });
    });
};

// Retrieve all Fields from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Field.findAll({ where: condition })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving fields.'
      });
    });
};

// Find a single Field with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Field.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Field with id=' + id
      });
    });
};

// Update a Field by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Update Field
  const field = {
    title: req.body.title,
    description: req.body.description,
    required: req.body.required ? req.body.required : false,
    fillable: req.body.fillable ? req.body.fillable : false,
    type: req.body.type,
    values: req.body.values,
    maxlength: req.body.maxlength
  };

  Field.update(field, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'Field was updated successfully.'
        });
      } else {
        res.status(404).send({
          message: `Cannot update Field with id=${id}. Maybe Field was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Field with id=' + id
      });
    });
};

// Delete a Field with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Field.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Field was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Field with id=${id}. Maybe Field was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete Field with id=' + id,
//       });
//     });
// };

// Delete all Fields from the database.
// exports.deleteAll = (req, res) => {
//   Field.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Fields were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while removing all fields.',
//       });
//     });
// };
