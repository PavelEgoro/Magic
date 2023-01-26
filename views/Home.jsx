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
      <div className="container">
        <div className="catalog row">
          {Cards.map((el) => (
            <div
              className="card catalog__card cardPika pika animated"
              key={el.id}
            >
              <img src={el.img} className="img-card" alt="img" />
              <style className="hover" />
              <button type="button" className="killAll">
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer" id="Contacts">
        <div className="container footer__content" />
      </footer>
    </Layout>
  );
};
