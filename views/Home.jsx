const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, currentUser }) {
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="container">
        {!currentUser ? (
          <div>Зарегистрируйся</div>
        ) : (
          <div>Ура, ты зарегистрировался</div>
        )}
      </div>
    </Layout>
  );
};
