var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var Videos = require('./models/Videos');

var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post('/v2/posts', (req, res) => {
 const dbVideos = req.body
 Videos.create(dbVideos, (err, data) => {
if(err)
res.status(500).send(err)
else
res.status(201).send(data)
 })
});

app.get('/v2/posts', (req, res) => {
 Videos.find((err, data) => {
if(err) {
res.status(500).send(err)
} else {
  res.status(200).send(data)
}
 })
});

 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
