const { authenticate } = require('ldap-authentication');
const ldapConfig = require('../../config/ldap.config.js');

// Try to login using LDAP
exports.login = async (req, res) => {
  // Validate request
  if (!req.body.user || !req.body.password) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  // Create a options object
  const options = {
    ldapOpts: {
      url: ldapConfig.URL
      // tlsOptions: { rejectUnauthorized: false }
    },
    userDn: `cn=${req.body.user},ou=${ldapConfig.GROUP},${ldapConfig.DC}`,
    userPassword: `${req.body.password}`,
    userSearchBase: `${ldapConfig.DC}`,
    usernameAttribute: ldapConfig.SEARCH_BY,
    username: `${req.body.user}`
    // starttls: false
  };

  // Connect to LDAP service and return result
  try {
    const user = await authenticate(options);
    res.status(200).send(user);
  } catch (err) {
    res.status(401).send({
      message: err.message || 'Some error occurred while login with LDAP'
    });
  }
};
