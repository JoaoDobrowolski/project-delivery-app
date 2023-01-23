const express = require('express');
// import routes from './routes/routes';
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
