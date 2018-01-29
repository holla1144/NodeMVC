'use strict';

const noteMethods = require('./controllers/note');
const Home = require('./controllers/home');
const Path = require('path');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
    config: {
      description: 'It will show all the notes.'
    }
  },
  {
    method: 'POST',
    path: '/note',
    handler: noteMethods.create,
    config: {
      description: 'It adds a new note!'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: noteMethods.read,
    config: {
      description: 'It shows one specific note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: noteMethods.update,
    config: {
      description: 'It edits one note'
    }
  },
  {
    method: 'GET',
    path: '/note/delete/{slug}',
    handler: noteMethods.delete,
    config: {
      description: 'It deletes a note'
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../static/public')
      }
    },
    config: {
      description: 'Provides static resources'
    }
  }
];
