const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ title }) {
  return (
    <Layout title={title}>
      <div className="container catalog__kk">
        <p>Ваша корзина</p>
        <div className="catalog row">
          {/* {Cards.map((el) => (
            <div className="card catalog__card" key={el.id}>
              <img src={el.img} className="catalog__img" alt="img" />
              <h5 className="catalog__title">{el.name}</h5>
              <p className="catalog__text">
                price:
                {el.price}
              </p>
              <button type="button">Добавить в корзину</button>
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};
