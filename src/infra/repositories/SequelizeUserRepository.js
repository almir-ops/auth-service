const UserModel = require('../models/UserModel');

module.exports = function SequelizeUserRepository() {
  return {
    findByEmail: async (email) => await UserModel.findOne({ where: { email } }),
    create: async (userData) => await UserModel.create(userData),
  };
};
