const express = require("express");
const routes = express();
const { login, register } = require("../controllers/auth");
const { verifyToken } = require('../middleware/verifyToken')

routes.post('/register', register);
routes.post('/login', login);
routes.get('/verify', verifyToken);

module.exports = routes;