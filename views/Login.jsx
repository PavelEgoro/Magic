const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="reg_flex">
          <form
            method="POST"
            action="/auth/login"
            className="js-formLog form_flex"
          >
            <span>UserName or Email</span>
            <input type="text" name="name" />
            <span>Password</span>
            <input type="password" name="password" />
            <p id="checkLog" />
            <button type="submit">Sing in</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
