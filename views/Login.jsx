const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="login_body">
        <div className="container reg__str">
          <div className="reg_flex">
            <form
              method="POST"
              action="/auth/login"
              className="js-formLog form_flex"
            >
              <span>Логин или email</span>
              <input
                type="text"
                name="name"
                className="form-control mb-2 bg-light"
              />
              <span>Пароль</span>
              <input
                type="password"
                name="password"
                className="form-control mb-2 bg-light"
              />
              <p id="checkLog" />
              <button type="submit" className="button">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
