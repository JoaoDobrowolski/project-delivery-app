const Router = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const sellersController = require('../controllers/sellersController');
const saleProductsController = require('../controllers/saleProductsController');

const routes = Router();

routes.post('/login', loginController.login);
routes.post('/register', registerController.register);
routes.get('/products', productsController.getAll);
routes.get('/sellers/:id', sellersController.getById);
routes.get('/sellers', sellersController.getAll);
routes.post('/sales', salesController.createSale);
routes.get('/sales/:id', salesController.getUserSales);
routes.get('/saleProducts/:id', saleProductsController.getSaleProducts);
// app.delete('/user/me', loginController.validateToken, userController.deleteUser);

module.exports = routes;
