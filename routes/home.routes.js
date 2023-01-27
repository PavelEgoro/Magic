const router = require('express').Router();
const Home = require('../views/Home');
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const { currentUser } = res.locals;
    const Cards = await Card.findAll();
    res.renderComponent(Home, { currentUser, title: 'Home Page', Cards });
  } catch (error) {
    console.log(error.massage);
  }
});

module.exports = router;
