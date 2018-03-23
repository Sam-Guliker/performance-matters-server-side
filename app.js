// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug')
const compression = require('compression')

// My modules
const routes = require('./routes/index');
const data = require('./modules/data')

//Express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
module.exports = app;
