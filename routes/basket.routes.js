
const router = require('express').Router();
const BasketView = require('../views/Basket');
const {
  User, Basket, BasketList, Card,
} = require('../db/models');


router.get('/', async (req, res) => {
  const { userId } = req.session;

  const cards = await Card.findAll();

  const actualBasket = await Basket.findAll(
    {
      where: { user_id: userId },
      order: [['createdAt', 'DESC']],
      include: {
        model: BasketList,
        attributes: ['card_id'],
      },
      raw: true,
    },
  );

  const basketCards = [];
  for (let i = 0; i < actualBasket.length; i += 1) {
    basketCards.push(cards.filter((card) => card.id === actualBasket[i]['BasketLists.card_id']));
  }
  res.renderComponent(BasketView, { basketCards });
});

router.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  const newBasket = await Basket.create({ user_id: userId, status: false });
  await BasketList.create({ basket_id: newBasket.id, card_id: Number(id), count: 1 });
});

router.delete('/:id', async (req, res) => {

  console.log(typeof (id));
  // const card = await BasketList.findOne({ where: { card_id: Number(id) } });
  // await Basket.update({ status: true, where: { id: card.id }, returning: true });
  const result = await BasketList.destroy({ where: { card_id: Number(id) } });
  res.json(result);
});

module.exports = router;
