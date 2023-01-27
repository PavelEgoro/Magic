const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="reg_body">
        <div className="container reg__str form">
          <div className="reg_flex">
            {/* <img src="/img/" alt="" /> */}
            <form
              method="POST"
              action="/auth/registration"
              className="js-formReg form_flex"
            >
              <img src="/img/icon5.png" alt="" className="icon5" />
              <span>Твое имя</span>
              <input
                type="text"
                name="name"
                className="form-control mb-2 bg-light"
              />
              <span>Почта</span>
              <input
                type="email"
                name="email"
                className="form-control mb-2 bg-light"
              />
              <div className="block_for_input">
                <span>Пароль</span>
                <input
                  type="password"
                  name="password"
                  id="input_test"
                  className="form-control mb-2 bg-light"
                />
                <div id="block_check" />
                <p id="checkReg" />
              </div>
              <button type="submit" className="button">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <footer className="footer" id="Contacts">
        <div className="container footer__content">
          © 1993-2023 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc. All
          Rights Reserved.
        </div>
      </footer> */}
    </Layout>
  );
};
