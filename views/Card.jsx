const React = require('react');

module.exports = function Card({ card }) {
  return (
    <div className="catalog__card" key={card.id}>
      <img src={card.img} className="img-card" alt="img" />
      <p className="catalog__text">{card.price}</p>
      <p className="catalog__text">{card.quality}</p>
      <style className="hover" />
      <a href={`/createcard/${card.id}`}>
        <button type="submit" className="button">
          Изменить
        </button>
      </a>
      <button
        type="submit"
        data-id={card.id}
        className="button js-delete killAll"
      >
        Удалить
      </button>
    </div>
  );
};
