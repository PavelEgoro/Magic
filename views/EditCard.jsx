const React = require('react');
const Layout = require('./Layout');

module.exports = function Create({ user, id }) {
  return (
    <Layout user={user}>
      <div className="container">
        <form action={`/editcard/${id}`} id="formEditCard">
          <span>title</span>
          <input
            className="form-control mb-2 bg-light"
            name="title"
            id="TitleInput"
            type="text"
            required
          />
          <span>Description</span>
          <input
            className="form-control mb-2 bg-light"
            name="description"
            id="DescribeInput"
            type="text"
            required
          />
          <button
            id="knopka"
            className="button btn-default btn-m bg-info"
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};