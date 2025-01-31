var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectToDb = require("./config/db");
const cors = require('cors');
var indexRouter = require('./routes/index');
const urlsRouter = require("./routes/urls");

var app = express();
connectToDb();
app.use(cors());
// app.use(cors({
//     origin: '*'
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', urlsRouter);


module.exports = app;
