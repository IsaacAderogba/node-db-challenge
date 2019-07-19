const express = require('express');
const server = express();
const api = require('./services');

server.use(express.json());
server.use(api);

module.exports = server;