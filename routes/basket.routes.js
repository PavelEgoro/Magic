const routerBasket = require('express').Router();

const BasketView = require('../views/Basket');
const { User, Basket } = require('../db/models');

routerBasket.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findOne({ where: { id: userId } });

  
  //   console.log(user);
  const cardBasket = await Basket.findAll({ where: { user_id: userId } });
  // const basketList = await Promise.all(
  //   cardBasket.map(async (el) => await Card.findOne({ where: { id: el.card_id } })),
  // );
  // console.log(basketList);

  res.renderComponent(BasketView, {
    title: 'My basket',
    user,
    basketList,
  });
});

routerBasket.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const card = await Basket.findOne({ where: { card_id: Number(id) } });
  card.destroy();
  res.json({ message: 'done' });
});

module.exports = routerBasket;

