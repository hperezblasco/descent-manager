/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var passport = require('passport');
var config = require('./config/environment');

// Setup passport
require('./config/passport')(passport);

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app, passport);
require('./routes')(app, passport);

// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
