const React = require('react');
const Card = require('./Card');
const Layout = require('./Layout');

module.exports = function Cards({ currentUser, title, Cards }) {
  Cards = Cards.sort((a, b) => a.id - b.id);
  return (
    <Layout title={title} currentUser={currentUser}>
      <div className="container">
        <form action="/cards" id="formAddCard" method="POST">
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
            type="file"
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
            className="button btn-default btn-m bg-info btn2"
            type="submit"
          >
            Add Card
          </button>
        </form>
      </div>
      <div className="catalog row" id="card_list">
        {Cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </Layout>
  );
};
