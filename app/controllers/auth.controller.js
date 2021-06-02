const { authenticate } = require('ldap-authentication');
const ldapConfig = require('../../config/ldap.config.js');

const userController = require('./user.controller.js');

// Try to login using LDAP
exports.login = async (req, res) => {
  // Validate request
  if (!req.body.user || !req.body.password) {
    res.status(400).send({
      message: 'Content cannot be empty!',
    });
    return;
  }

  // Create a options object
  const options = {
    ldapOpts: {
      url: ldapConfig.URL,
      // tlsOptions: { rejectUnauthorized: false }
    },

    //cn o uid -> en funcion del RDN aplicado
    userDn: `${ldapConfig.SEARCH_BY}=${req.body.user},ou=${ldapConfig.GROUP},${ldapConfig.DC}`,
    userPassword: `${req.body.password}`,

    //Parametros necesarios en caso de querer devolver toda la informacion del usuario almacenada en LDAP
    //Actualmente devuelve true si log in es correcto, no se necesita el resto de informacion

    //userSearchBase: `${ldapConfig.DC}`,
    //usernameAttribute: ldapConfig.SEARCH_BY,
    //username: `${req.body.user}`
    // starttls: false
  };

  // Connect to LDAP service and return result
  try {
    // TODO Make compatible with Docker
    // const user = await authenticate(options);
    // let returnfromDB = user;

    // User formated with some important info + token
    let returnfromDB = await userController.authenticateUser(req.body.user, req.body.password);

    res.status(200).send(returnfromDB);
  } catch (err) {
    res.status(401).send({
      message: err.message || 'Error',
    });
  }
};
