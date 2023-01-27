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
            <div className="block_for_input">
              <span>Password</span>
              <input type="password" name="password" id="input_test" />
              <div id="block_check" />
              <p id="checkReg" />
            </div>
            <button type="submit">Registration</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
