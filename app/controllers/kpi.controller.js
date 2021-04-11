const db = require('../models');
const KPI = db.kpis;
const Field = db.fields;
const Op = db.Sequelize.Op;

// Create and Save a new KPI
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.kpi || !req.body.kpi.title) {
    res.status(400).send({
      message: 'Content cannot be empty!',
    });
    return;
  }

  // Get updated fields
  const fields = updateKPIFields(req);

  // Create a KPI
  const kpi = req.body.kpi;

  // Save KPI in the database
  try {
    const createdKpi = await KPI.create(kpi);
    createdKpi.setFields(fields);

    res.send(createdKpi);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the KPI.',
    });
  }
};

// Retrieve all KPIs from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  KPI.findAll({ include: [{ model: Field }], where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving kpis.',
      });
    });
};

// Find a single KPI with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  KPI.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving KPI with id=' + id,
      });
    });
};

// Update a KPI by the id in the request
exports.update = async (req, res) => {
  const id = req.params.kpi.id;

  // Get updated fields
  const fields = this.updateKPIFields(req);

  KPI.update(req.body.kpi, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        // Update fields if update KPI was successful
        const updateKpi = async () => {
          const updatedKpi = await KPI.findByPk(id);
          updatedKpi.setFields(fields);
        };

        updateKpi();

        res.send({
          message: 'KPI was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update KPI with id=${id}. Maybe KPI was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating KPI with id=' + id,
      });
    });
};

// Delete a KPI with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   KPI.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'KPI was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete KPI with id=${id}. Maybe KPI was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete KPI with id=' + id,
//       });
//     });
// };

// Delete all KPIs from the database.
// exports.deleteAll = (req, res) => {
//   KPI.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} KPIs were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while removing all kpis.',
//       });
//     });
// };

// Find all enabled KPIs
exports.findAllEnabled = (req, res) => {
  KPI.findAll({ where: { enabled: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving kpis.',
      });
    });
};

const updateKPIFields = async (req) => {
  // Get all fields that we wanna include in this KPI
  const requestedFields = req.body.fields;

  const fields = await Field.findAll({
    where: {
      id: requestedFields.map((field) => field.id),
    },
  });

  // Add values to KPIFields before adding them to the new KPI
  for (const field of fields) {
    const requestedField = requestedFields.find(
      (searchingField) => searchingField.id === field.id
    );

    field.KPIField = {
      value: requestedField.value,
    };
  }

  return fields;
};
