const React = require('react');
const Layout = require('./Layout');

module.exports = function Basket({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        Basket
      </div>
    </Layout>
  );
};
