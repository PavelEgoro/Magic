/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, user, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
