/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register');
require('dotenv').config();
const express = require('express');
const db = require('./db/models');

const app = express();
const config = require('./config/config');

const PORT = process.env.PORT || 3000;
config(app);

async function start() {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`server listen port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
