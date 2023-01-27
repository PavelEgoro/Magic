const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, currentUser, Cards }) {
  return (
    <Layout title="SECRET CARD" currentUser={currentUser}>
      {/* <div className="container">
        {!currentUser ? (
          <div>Зарегистрируйся</div>
        ) : (
          <div>Ура, ты зарегистрировался</div>
        )}
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/img/carousel.png"
              className="d-block w-100 my-carousel_img"
              alt="carousel"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="my-carousel_text">
                Сила приходит вместе с совершенством
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
              <p className="my-carousel_text">
                Взгляните на выпуск Phyrexia: All Will Be One уже сегодня!
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
              <p className="my-carousel_text">
                Твои уникальные карты ждут тебя
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
        <div className="container cardContainer">

          <div className="catalog row">
            {Cards.map((el) => (
              <div
                className="card catalog__card cardPika pika animated"
                key={el.id}
              >
                <img src={el.img} className="img-card" alt="img" />
                <style className="hover" />
                <button type="button" className="killAll delete" id={el.id}>
                  <img src="/img/icon.png" alt="" className="addCard" />
                </button>
                <div className="icon4">
                  <img src="/img/icon4.png" alt="" />
                  <span>{el.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home-color">
          <div className="home">
            <div className="home-1">
              <h3>SECRET CARD</h3>
              <p>
                Магазин Secret Card предлагает все то, что мы любим в игре Magic
                (а также несколько потрясающих совместных проектов)! Вас ждут
                карты с веселыми и необычными иллюстрациями, новые художники, а
                также оформления, о которых вы и не мечтали. Однако
                поторопитесь! Каждая карта появляется в продаже на очень
                короткое время. Не успеете — и карты как не бывало!
              </p>
            </div>
            <div className="home-2">
              <img src="/img/home.png" alt="lion" className="home-img" />
            </div>
          </div>
        </div>
        <footer className="footer" id="Contacts">
          <div className="container footer__content">
            © 1993-2023 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc.
            All Rights Reserved.
          </div>
        </footer>
      </div>
      <script src="/addCardToBasket.js" />
    </Layout>
  );
};
