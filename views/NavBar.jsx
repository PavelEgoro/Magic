/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports
const React = require("react");

module.exports = function NavBar({ user }) {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
      </div>
      {!user ? (
        <div>
          <a href="/auth/login">
            <button type="submit">Login</button>
          </a>
          <a href="/auth/registration">
            <button type="submit">Registration</button>
          </a>
        </div>
      ) : (
        <div>
          <a href="/auth/logout">
            <button type="submit">Logout</button>
          </a>
          <a href="/cards">
            <button type="submit">Personal Area</button>
          </a>
        </div>
      )}
    </nav>
  );
};
