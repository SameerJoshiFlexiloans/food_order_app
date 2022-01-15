const express = require('express');
const UserAuthenticationController = require('./Controllers/userAuthentication.controller');
const InitializationController = require('./Controllers/intializationController');

const router = express.Router();

const intializationController = new InitializationController();
intializationController.register(router)

const usertAuthenticationController = new UserAuthenticationController();
usertAuthenticationController.register(router);

module.exports = router;

