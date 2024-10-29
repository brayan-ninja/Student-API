const express = require('express');
const user_contoller = require('../contorllers/user_controller');
const routes = express.Router();


routes.post('/register', user_contoller.register)
routes.post('/login' ,user_contoller.login)
module.exports = routes;