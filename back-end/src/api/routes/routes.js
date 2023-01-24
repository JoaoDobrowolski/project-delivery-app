const Router = require('express');
const loginController = require('../controllers/loginController');

const routes = Router();

routes.post('/login', loginController.login);
// app.delete('/user/me', loginController.validateToken, userController.deleteUser);

module.exports = routes;
