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
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/users', usersRouter);
app.post("/users/signup", (req, res) => {
    res.json({ result: true, message: "Signup successful!" });
});
app.listen(3000, () => console.log("Server running on port 3000"));
app.post('/users/signin', (req, res) => {  
});
module.exports = app;
