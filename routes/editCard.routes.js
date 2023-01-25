const router = require('express').Router();
const { User } = require('../db/models');
const { Card } = require('../db/models');
const create = require('../views/EditCard');

router.get('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  const user = userId && (await User.findByPk(Number(userId)));
  res.renderComponent(create, { user, id });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const EditCard = await Card.update(
    {
      title,
      description,
    },
    {
      where: {
        id,
      },
      returning: true,
    },
  );
  if (EditCard[0] > 0) {
    res.status(200).json({ editcard: true });
  }
});
module.exports = router;
