const React = require('react');

module.exports = function Nav({ currentUser }) {
  return (
    <header className="header">
      <nav className="container navbar bg-body-tertiary">
        <div className="header__logo">
          <a href="/" className="header__link">
            <img src="/img/logo.png" alt="Logo" className="header__img" />
          </a>
        </div>
        {!currentUser ? (
          <div>
            <a className="nav__link" href="/auth/login">
              <button type="submit" className="button">
                Login
              </button>
            </a>
            <a className="nav__link" href="/auth/registration">
              <button type="submit" className="button">
                Registration
              </button>
            </a>
          </div>
        ) : (
          <div>
            <a className="nav__link" href="/basket">
              <button type="submit" className="button">
                Basket
              </button>
            </a>
            <a className="nav__link" href="/auth/logout">
              <button type="submit" className="button js-btn-exit">
                Log out
              </button>
            </a>
            <a href="/editcard">
              <button type="submit">Personal Area</button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
