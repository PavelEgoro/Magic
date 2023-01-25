const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        {!user ? (
          <div>Зарегистрируйся</div>
        ) : (
          <div>Ура, ты зарегистрировался</div>
        )}
      </div>
    </Layout>
  );
};
