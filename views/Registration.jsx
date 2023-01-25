const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="reg_flex">
          <form
            method="POST"
            action="/auth/registration"
            className="js-formReg form_flex"
          >
            <span>UserName</span>
            <input type="text" name="name" />
            <span>Email</span>
            <input type="email" name="email" />
            <span>Password</span>
            <input type="password" name="password" />
            <p id="checkReg" />
            <button type="submit">Registration</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
