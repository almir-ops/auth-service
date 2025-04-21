const express = require('express');
const router = express.Router();

const SequelizeUserRepository = require('../../infra/repositories/SequelizeUserRepository');
const BcryptEncrypter = require('../../infra/crypto/BcryptEncrypter');
const JWTTokenService = require('../../infra/jwt/JWTTokenService');

const LoginUser = require('../../usecases/loginUser');
const AuthController = require('../controllers/AuthController');

const userRepository = SequelizeUserRepository();
const encrypter = BcryptEncrypter();
const tokenService = JWTTokenService();

const controller = AuthController(
  LoginUser(userRepository, encrypter, tokenService)
);

router.post('/login', controller.login);

module.exports = router;
