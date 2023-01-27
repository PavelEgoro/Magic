const React = require('react');

module.exports = function Nav({ currentUser }) {
  return (
    <header className="header">
      <nav className="container navbar bg-body-tertiary">
        <div className="header__logo nav_flex">
          <a href="/" className="header__link">
            <img src="/img/logo.png" alt="Logo" className="header__img" />
          </a>
          <a className="nav__link" href="/">
            ИГРА
          </a>
          <a className="nav__link" href="/">
            СЮЖЕТ
          </a>
        </div>
        {!currentUser ? (
          <div className="nav_flex">
            <a className="nav__link" href="/">
              КОРЗИНА
            </a>
            <a className="nav__link" href="/auth/login">
              ВОЙТИ
            </a>
            <a className="nav__link" href="/auth/registration">
              РЕГИСТРАЦИЯ
            </a>
          </div>
        ) : (
          <div className="nav_flex">
            <a className="nav__link" href="/auth/logout">
              <button type="submit" className="button js-btn-exit">
                ВЫЙТИ
              </button>
            </a>
            <a href="/cards">ПРОФИЛЬ</a>
          </div>
        )}
      </nav>
    </header>
  );
};
