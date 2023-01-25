const Router = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

const routes = Router();

routes.post('/login', loginController.login);
routes.post('/register', registerController.register);
// app.delete('/user/me', loginController.validateToken, userController.deleteUser);

module.exports = routes;
