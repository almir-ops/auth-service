const bcrypt = require('bcrypt');

module.exports = function BcryptEncrypter() {
  return {
    hash: (pwd) => bcrypt.hash(pwd, 10),
    compare: (pwd, hash) => bcrypt.compare(pwd, hash),
  };
};
