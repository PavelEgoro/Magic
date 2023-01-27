const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ title, currentUser, basketCards }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="container catalog__kk">
        <p>Ваша корзина</p>
        <div className="catalog row basketContainer">
          {basketCards.flat().map((card) => (
            <div className="card catalog__card" key={card.id} id={card.id}>
              <img src={card.img} className="catalog__img" alt="img" />
              <h5 className="catalog__title">{card.name}</h5>
              <p className="catalog__text">
                price:
                {card.price}
              </p>
              <button type="button">Купить</button>
              <button type="button" className="basketDelete">Удалить</button>
            </div>
          ))}
        </div>
      </div>
      <script src="/deleteFromBasket.js" />
    </Layout>
  );
};
