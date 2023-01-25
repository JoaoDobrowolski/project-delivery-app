const Router = require('express');
const loginController = require('../controllers/loginController');

const routes = Router();

routes.post('/login', loginController.login);
// routes.post('/register', registerController.login); <---- ROTA REGISTER
// app.delete('/user/me', loginController.validateToken, userController.deleteUser);

module.exports = routes;
