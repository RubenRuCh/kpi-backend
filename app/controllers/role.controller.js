const db = require('../../models');

const ROL = db.roles;
const Op = db.Sequelize.Op;

exports.findAllRoles = (req, res) => {
    ROL.findAll({
        attributes: ['role'],
        group: ['role']
    })
    .then(roles => {
        res.status(200).send(roles);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving roles'
        });
    });
}

exports.findAllSubroles = (req, res) => {
    ROL.findAll({
        attributes: ['subrole'],
        where: {
            subrole: {
                [Op.ne]: '--',
            }
        },
        group: ['subrole']
    })
    .then(subroles => {
        res.status(200).send(subroles);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving subroles'
        });
    });
    
}