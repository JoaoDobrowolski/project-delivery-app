const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

const filePath = path.join(__dirname, '../../public');

app.use('/images', express.static(filePath));
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
