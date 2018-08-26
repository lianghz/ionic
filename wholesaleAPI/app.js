var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userToken = require('./controllers/token')
// var goodsRouter = require('./controllers/goods');

var app = express();
app.set('env', 'development')


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser')());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//route
app.use(session({
  secret: 'hubwiz app', //secret的值建议使用随机字符串
  cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(userToken.setTokenUserName);


require('./routes/goods')(app);//goods route
require('./routes/common')(app);
require('./routes/price')(app);
require('./routes/warehouse')(app);
require('./routes/document')(app);
require('./routes/staff')(app);
require('./routes/settle')(app);
require('./routes/supplier')(app);
require('./routes/finance')(app);
require('./routes/customer')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(8090);

module.exports = app;
