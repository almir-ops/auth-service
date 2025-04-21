const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

module.exports = function JWTTokenService() {
  return {
    sign: (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }),
  };
};
