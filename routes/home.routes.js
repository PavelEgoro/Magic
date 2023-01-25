const router = require('express').Router();
const Home = require('../views/Home');

router.get('/', async (req, res) => {
  try {
    const { currentUser } = res.locals;

    res.renderComponent(Home, { currentUser, title: 'Home Page' });
  } catch (error) {
    console.log(error.massage);
  }
});

module.exports = router;
