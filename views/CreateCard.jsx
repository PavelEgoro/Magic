const React = require('react');
const Layout = require('./Layout');

module.exports = function Create({ currentUser, id }) {
  return (
    <Layout currentUser={currentUser}>
      <div className="container">
        <form action={`/createcard/${id}`} id="formCreateCard">
          <span>Name</span>
          <input
            className="form-control mb-2 bg-light"
            name="name"
            id="NameInput"
            type="text"
            required
          />
          <span>Price</span>
          <input
            className="form-control mb-2 bg-light"
            name="price"
            id="PriceInput"
            type="text"
            required
          />
          <span>Img</span>
          <input
            className="form-control mb-2 bg-light"
            name="img"
            id="ImgInput"
            type="text"
            required
          />
          <span>Quality</span>
          <input
            className="form-control mb-2 bg-light"
            name="quality"
            id="QualityInput"
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
