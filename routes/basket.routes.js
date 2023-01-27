const router = require('express').Router();
const BasketView = require('../views/Basket');
const { User, Basket, BasketList } = require('../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const currentUser = await User.findByPk(userId);

  // const actualBasket = await Basket.findAll(
  //   {
  //     include: {
  //       model: BasketList,
  //       key: 'card_id',
  //       raw: true,
  //     },
  //     where: { user_id: userId, status: false },
  //   },

  // );
  // console.log(actualBasket);
  res.renderComponent(BasketView, { currentUser });
});

// router.get('/', async (req, res) => {
//   const { userId } = req.session;
//   const currentUser = await User.findByPk(userId);
//   const cards = await User.findAll({
//     raw: true,
//     where: {
//       id: req.session.currentUser,
//     },
//     include: [User.Card],
//   });
//   const user = await User.findOne({
//     raw: true,
//     where: {
//       id: req.session.currentUser.id,
//     },
//   });
//   res.renderComponent(BasketView, { user, cards });
// });
// const BList = await Promise.all(
//   cardBasket.map(async (el) => await Card.findOne({ where: { id: el.card_id } })),
// );
// res.renderComponent(BasketView, {
//   title: 'My basket',
//   user,
//   card_id: BasketList,
// });

// routerBasket.delete('/delete/:id', async (req, res) => {
//   const { id } = req.params;
//   const card = await Basket.findOne({ where: { card_id: Number(id) } });
//   card.destroy();
//   res.json({ message: 'done' });
// });

module.exports = router;
