const router = require("express").Router();
const { User } = require("../db/models");
const { Card } = require("../db/models");
const create = require("../views/EditCard");

router.get("/", async (req, res) => {
  const { userId } = req.session;
  // const user = await User.findOne({
  //   where: { id: userId },
  // });
  // const {currentUser} = res.locals
  const Cards = await Card.findAll({ where: { user_id: userId } });
  res.renderComponent(create, { Cards });
});
router.post("/", async (req, res) => {
  const { userId } = req.session;
  const { img, name, quality, price } = req.body;
  const newCard = await Card.create({
    img,
    name,
    quality,
    price,
    user_id: userId,
  });
  res.redirect("/editcard");
});
router.delete("/:idCard", async (req, res) => {
  const { idCard } = req.params;
  const del = await Card.destroy({ where: { id: idCard } });
  res.json({ key: del });
});
module.exports = router;
