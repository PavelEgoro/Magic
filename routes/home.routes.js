const router = require('express').Router();
const Home = require('../views/Home');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const userCheck = await User.findByPk(userId);
    res.renderComponent(Home, { userCheck, title: 'Home Page' });
  } catch (error) {
    console.log(error.massage);
  }
});

module.exports = router;