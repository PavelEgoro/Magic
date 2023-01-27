const { User } = require('../db/models');

module.exports = async function sessionCheck(req, res, next) {
  if (req.session.userId) {
    res.locals.currentUser = await User.findByPk(req.session.userId);
  }
  next();
};
