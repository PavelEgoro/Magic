const React = require("react");
const Layout = require("./Layout");

module.exports = function Cards({ user, title, Cards }) {
  Cards = Cards.sort((a, b) => a.id - b.id);
  return (
    <Layout title={title} user={user}>
      <div className="catalog row container" id="card_list">
        {Cards.map((el) => (
          <div key={el.id} className="card catalog__card">
            <img src={el.img} className="catalog__img" alt="img" />
            <h5 className="catalog__title">{el.name}</h5>
            <p className="catalog__text">{el.price}</p>
            <p className="catalog__text">{el.quality}</p>
            <a href={`/editbook/${el.id}`}>
              <button type="submit" className="button">
                Изменить
              </button>
            </a>

            <button type="submit" data-id={el.id} className="button js-delete">
              Удалить
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        <form action="/editcard" method="POST">
          <span>Name</span>
          <input
            className="form-control mb-2 bg-light"
            name="name"
            id="TitleInput"
            type="text"
            required
          />
          <span>Price</span>
          <input
            className="form-control mb-2 bg-light"
            name="price"
            id="DescribeInput"
            type="text"
            required
          />
          <span>Img</span>
          <input
            className="form-control mb-2 bg-light"
            name="img"
            id="UrlInput"
            type="text"
            required
          />
          <span>Quality</span>
          <input
            className="form-control mb-2 bg-light"
            name="quality"
            id="UrlInput"
            type="text"
            required
          />
          <button
            id="knopka"
            className="button btn-default btn-m bg-info"
            type="submit"
          >
            Add Card
          </button>
        </form>
      </div>
    </Layout>
  );
};
