const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, currentUser, Cards }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="container">
        {!currentUser ? (
          <div>Зарегистрируйся</div>
        ) : (
          <div>Ура, ты зарегистрировался</div>
        )}
      </div>
      <div className="container catalog__kk">
        <div className="catalog row">
          {Cards.map((el) => (
            <div className="card catalog__card" key={el.id}>
              <img src={el.img} className="catalog__img" alt="img" />
              <h5 className="catalog__title">{el.name}</h5>
              <p className="catalog__text">price:{el.price}</p>

              <button
            type="button"
            className="btn btn-dark favorite-btn"
          >
            В корзину
          </button>

            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
