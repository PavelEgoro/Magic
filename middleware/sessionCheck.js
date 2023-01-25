const { User } = require('../db/models');

async function sessionCheck(req, res, next) {
  if (req.session.userId) {
    res.locals.currentUser = await User.findByPk(req.session.userId);
  }

  next();
}

module.exports = sessionCheck;
