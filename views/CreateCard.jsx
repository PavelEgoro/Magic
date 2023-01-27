const React = require('react');
const Layout = require('./Layout');

module.exports = function Create({ currentUser, id }) {
  return (
    <Layout currentUser={currentUser}>
      <div className="container">
        <form action={`/createcard/${id}`} id="formCreateCard">
          <span>Цена</span>
          <input
            className="form-control mb-2 bg-light"
            name="price"
            id="PriceInput"
            type="text"
            required
          />
          <span>Описание</span>
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
            Изменить
          </button>
        </form>
      </div>
    </Layout>
  );
};
