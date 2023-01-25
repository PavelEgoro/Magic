require("@babel/register");
require("dotenv").config();
const express = require("express");
const db = require("./db/models");
const routerHome = require('./routes/home.routes');
const routerAuthRegLog = require('./routes/authRegLog.routes');
const routerEditCard = require('./routes/editCard.routes')


const app = express();
const config = require('./config/config');

const PORT = process.env.PORT || 3000;
config(app);

app.use('/', routerHome);
app.use('/auth', routerAuthRegLog);
app.use('/editcard', routerEditCard)

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
