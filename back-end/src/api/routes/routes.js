// import { Router } from 'express';
const Router = require('express');
const loginController = require('../controllers/loginController');

const routes = Router();

// routes.get('/', (req, res) => res.status(200).json({ status: 'ok' }));
routes.post('/login', loginController.login);
// routes.get('/login', (req, res) => res.status(200).json({ status: 'ok' }));
// routes.get('/coffee', (_req, res) => res.status(418).end());

module.exports = routes;
