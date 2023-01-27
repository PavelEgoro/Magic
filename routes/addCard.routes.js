const router = require('express').Router();
const path = require('path');
const { User } = require('../db/models');
const { Card } = require('../db/models');
const create = require('../views/AddCard');
const CardView = require('../views/Card');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  // const user = await User.findOne({
  //   where: { id: userId },
  // });
  // const {currentUser} = res.locals
  const Cards = await Card.findAll({ where: { user_id: userId } });
  res.renderComponent(create, { Cards });
});

// router.post('/', async (req, res) => {
//   const { userId } = req.session;
//   const { img, name, quality, price } = req.body;
//   const newCard = await Card.create({
//     img,
//     name,
//     quality,
//     price,
//     user_id: userId,
//   });
//   res.redirect('/cards');
// });

router.post('/', async (req, res) => {
  const { userId } = req.session;
  const { img, name, quality, price } = req.body;
  const newCard = await Card.create({
    img,
    name,
    quality,
    price,
    user_id: userId,
  });
  res.renderComponent(CardView, { card: newCard });
});

router.post('/upload', async (req, res) => {
  const fileName = req.files.homesImg.name;
  const size = req.files.homesImg.length;
  const extension = path.extname(fileName);
  const allowedExtensions = /png|jpeg|jpg|gif|webp/;
  if (!allowedExtensions.test(extension)) throw 'Unsupported extension !';
  if (size > 5000000) throw 'File must be less than 5MB';
  const { md5 } = req.files.homesImg;
  const URL = `/upload/${md5}${extension}`;

  req.files.homesImg.mv(`./public/${URL}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ path: URL });
  });
});

router.delete('/:idCard', async (req, res) => {
  const { idCard } = req.params;
  const del = await Card.destroy({ where: { id: idCard } });
  res.json({ key: del });
});
module.exports = router;
