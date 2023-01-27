const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, currentUser, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link
          rel="shortcut icon"
          href="/img/favicon.png"
          type="image/png"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          defer
        />
        <script src="/script.js" defer />
        <script src="/application.js" defer />
        <script src="/deleteCard.js" defer />
        <script src="/createCard.js" defer />
        <script src="/addCard.js" defer />
        <script src="/fitch.js" defer />
        <script src="/sort.js" defer />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NavBar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
};
