const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      {!user ? <div>Hello</div> : (
        <div>
          Hello,
          {' '}
          {user.name}
        </div>
      )}
    </Layout>
  );
};
