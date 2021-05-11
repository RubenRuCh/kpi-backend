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

exports.findAllservices = (req, res) => {
    ROL.findAll({
        attributes: ['service'],
        where: {
            service: {
                [Op.ne]: '--',
            }
        },
        group: ['service']
    })
    .then(services => {
        res.status(200).send(services);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error ocurred while retrieving services'
        });
    });
    
}