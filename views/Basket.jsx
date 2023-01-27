const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ title, currentUser, basketCards }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="bg_color">
        <div className="container positionCard">
          <div className="catalog row basketContainer">
            {basketCards.flat().map((card) => (
              <div className="card catalog__card" key={card.id} id={card.id}>
                <img src={card.img} className="img-card" alt="img" />
                {/* <p className="catalog__text">
                  price:
                  {card.price}
                </p> */}
                <div className="icon4">
                  <img src="/img/icon4.png" alt="" />
                  <span>{card.price}</span>
                </div>
                {/* <button type="button">Купить</button> */}
                <img
                  src="/img/icon2.png"
                  data-id={card.id}
                  alt=""
                  className="killAll icon_delete basketDelete"
                />
              </div>
            ))}
          </div>
          <div className="add-btn">
            <button type="submit" className="button">
              Купить
            </button>
          </div>
        </div>
      </div>
      <script src="/deleteFromBasket.js" />
    </Layout>
  );
};
