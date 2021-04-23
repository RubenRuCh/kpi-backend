const db = require('../../models');
const Register = db.registers;
const KpiField = db.kpiFields;
const Op = db.Sequelize.Op;

// Create and Save a new Register
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.value) {
    res.status(400).send({
      message: 'Content cannot be empty!',
    });
    return;
  }

  // Get updated fields
  const registerValues = await updateRegisterValues(req);

  // Create a Register
  const register = {
    value: req.body.value,
  };

  // Save Register in the database
  try {
    const createdRegister = await Register.create(register);

    /* console.log(Register.prototype); */
    createdRegister.setKpi_fields(registerValues);

    res.status(201).send(createdRegister);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while creating the Register.',
    });
  }
};

// Retrieve all Register from the database
exports.findAll = (req, res) => {
  const value = req.query.value;
  var condition = value ? { value: { [Op.iLike]: `%${value}%` } } : null;

  Register.findAll({
    include: [
      {
        model: KpiField,
        // include: [{ model: Field, where: { fillable: true } }],
      },
    ],
    where: condition,
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving registers.',
      });
    });
};

// Find a single KPI with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Register.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Register with id=' + id,
      });
    });
};

// Update a Register by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;

  // Get updated kpiFields
  const columns = await updateRegisterValues(req);

  Register.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        // Update kpiFields if update Register was successful
        const updateRegister = async () => {
          const updatedRegister = await Register.findByPk(id);
          updatedRegister.setKpi_fields(columns);
        };

        updateRegister();

        res.status(200).send({
          message: 'Register was updated successfully.',
        });
      } else {
        res.status(404).send({
          message: `Cannot update Register with id=${id}. Maybe Register was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Register with id=' + id,
      });
    });
};

// Delete a Register with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Register.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Register was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Register with id=${id}. Maybe Register was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete KPI with id=' + id,
//       });
//     });
// };

// Delete all Registers from the database.
// exports.deleteAll = (req, res) => {
//   Register.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Register were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while removing all kpis.',
//       });
//     });
// };

const updateRegisterValues = async (req) => {
  // Get all kpi_fields that we wanna include in this Register
  const requestedColumns = req.body.columns;

  const columns = await KpiField.findAll({
    where: {
      id: requestedColumns.map((column) => column.id),
    },
  });

  // Add values to RegisterValues before adding them to the new Register
  for (const column of columns) {
    const requestedColumn = requestedColumns.find(
      (searchingColumn) => searchingColumn.id === column.id
    );

    column.register_value = {
      value_label: requestedColumn.value_label,
    };
  }

  return columns;
};
