require ("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');

var indexRouter = require('./routes/index');
var weatherRouter = require('./routes/weather');

var app = express();
const usersRouter = require('./routes/users');

const cors = require('cors');
app.use(cors(cors({
    origin: "https://weather-forecast-frontend-psi.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/users', usersRouter);

module.exports = app;
