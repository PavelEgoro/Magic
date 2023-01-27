const React = require('react');
const Layout = require('./Layout');

module.exports = function Create({ currentUser, id }) {
  return (
    <Layout currentUser={currentUser}>
      <div className="reg_body">
        <div className="container reg__str" id="deleteClass">
          <div className="reg_flex">
            <form
              action={`/createcard/${id}`}
              id="formCreateCard"
              className="form my-class"
            >
              <img src="/img/icon7.png" alt="" className="icon7" />
              <span>Цена</span>
              <input
                className="form-control mb-2 bg-light"
                name="price"
                id="PriceInput"
                type="text"
                required
              />
              <span>Качество</span>
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
        </div>
      </div>
    </Layout>
  );
};
