/* eslint-disable import/no-extraneous-dependencies */
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const sessionConfig = require('./session');
const ssr = require('../middleware/ssr');
const sessionCheck = require('../middleware/sessionCheck');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(fileUpload());
  app.use(sessionCheck);
  app.use(express.static('public'));
  app.use(ssr);
};

module.exports = serverConfig;
