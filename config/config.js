/* eslint-disable import/no-extraneous-dependencies */
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const sessionConfig = require('./session');
const ssr = require('../middleware/ssr');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(ssr);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(express.static('public'));
};

module.exports = serverConfig;
