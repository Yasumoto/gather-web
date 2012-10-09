// Generated by CoffeeScript 1.3.3
(function() {
  var app, express, http, index, path, routes;

  express = require('express');

  http = require('http');

  path = require('path');

  routes = require('./routes');

  index = require('./routes/index');

  app = express();

  app.configure(function() {
    app.set('port', process.env.PORT || 1337);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({
      src: __dirname + '/static'
    }));
    return app.use(express["static"](path.join(__dirname, 'static')));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', index.index);
  app.get('/yc', index.yc);
  app.get('/about', index.yc);

  http.createServer(app).listen(app.get('port'), function() {
    return console.log("Express server listening on port " + app.get('port'));
  });

}).call(this);
