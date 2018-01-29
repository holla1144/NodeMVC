'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models');
const Path = require('path');

let server = new Hapi.Server({});

server.connection({port: Settings.port});

server.register([
  require('vision'),
  require('inert')
], err => {
  Hoek.assert(!err, err);

  server.views({
    engines: { pug: require('pug')},
    path: Path.join(__dirname, 'lib/views'),
    compileOptions: {
      pretty: false
    },
    isCached: Settings.env === 'production'
  });

  server.route(Routes);
});

Models.sequelize.sync().then(() => {
  server.start( err => {
      Hoek.assert(!err, err);
      console.log(`App is running on port ${server.info.uri}`);
    }
  );
});

