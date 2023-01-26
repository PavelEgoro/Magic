require('@babel/register');
require('dotenv').config();
const express = require('express');
const db = require('./db/models');
const routerHome = require('./routes/home.routes');
const routerAuthRegLog = require('./routes/authRegLog.routes');
const routerAddCard = require('./routes/addCard.routes');
const routerBasket = require('./routes/basket.routes');
const routerCreateCard = require('./routes/createCard.routes');

const app = express();
const config = require('./config/config');

const PORT = process.env.PORT || 3000;
config(app);

app.use('/', routerHome);
app.use('/auth', routerAuthRegLog);
app.use('/cards', routerAddCard);
app.use('/basket', routerBasket);
app.use('/createcard', routerCreateCard);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`сервер слушает ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
