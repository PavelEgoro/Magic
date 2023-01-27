const router = require('express').Router();
const { User } = require('../db/models');
const { Card } = require('../db/models');
const edit = require('../views/CreateCard');

router.get('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  const user = userId && (await User.findByPk(Number(userId)));
  res.renderComponent(edit, { user, id });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { price, quality } = req.body;
  const createCard = await Card.update(
    {
      price,
      quality,
    },
    {
      where: {
        id,
      },
      returning: true,
    }
  );
  if (createCard[0] > 0) {
    res.status(200).json({ createcard: true });
  }
});

module.exports = router;
