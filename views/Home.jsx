const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, currentUser, Cards }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      {/* <div className="container">
        {!currentUser ? (
          <div>Зарегистрируйся</div>
        ) : (
          <div>Ура, ты зарегистрировался</div>
        )}
<<<<<<< HEAD
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
=======
      </div> */}

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide my-carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
>>>>>>> ccf954608526f0913e6e13948745e7e32d06c866
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/img/carousel.png"
              className="d-block w-100 my-carousel_img"
              alt="carousel"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>
                Сила приходит вместе с совершенством. Взгляните на выпуск
                Phyrexia: All Will Be One уже сегодня!
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/img/carousel3.png"
              className="d-block w-100"
              alt="carousel"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/carousel1.png"
              className="d-block w-100"
              alt="carousel"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="homePage">
        <div className="home container">
          <h3>SECRET LAIR</h3>
          <p>
            Наборы Secret Lair предлагают все то, что мы любим в игре Magic (а
            также несколько потрясающих совместных проектов)! Вас ждут карты с
            веселыми и необычными иллюстрациями, новые художники, а также
            оформления, о которых вы и не мечтали. Однако поторопитесь! Каждый
            набор появляется в продаже на очень короткое время. Не успеете — и
            набора как не бывало!
          </p>
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
                <button type="button" className="killAll delete">
                  <img src="/img/icon.png" alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <footer className="footer" id="Contacts">
          <div className="container footer__content">
            © 1993-2023 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc.
            All Rights Reserved.
          </div>
        </footer>
      </div>
    </Layout>
  );
};
