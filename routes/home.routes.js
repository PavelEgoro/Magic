const router = require('express').Router();
const Home = require('../views/Home');
const { Card } = require('../db/models');
const CaardView = require('../views/CaardView');

router.get('/', async (req, res) => {
  try {
    const { currentUser } = res.locals;
    const Cards = await Card.findAll();
    res.renderComponent(Home, { currentUser, title: 'Home Page', Cards });
  } catch (error) {
    console.log(error.massage);
  }
});

router.put('/sort', async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.sort === 'По возрастанию') {
      console.log('+');
      const card = await Card.findAll({
        order: [['price', 'DESC']],
        raw: true,
      });
      res.renderComponent(CaardView, { Cards: card });
      console.log(card);
    } else {
      console.log('-');
      const card = await Card.findAll({
        order: [['price', 'ASC']],
      });
      res.renderComponent(CaardView, { Cards: card });
      console.log(card);
    }
  } catch (error) {
    console.log(error.massage);
  }
});
module.exports = router;
