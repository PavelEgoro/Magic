const React = require('react');

module.exports = function Card({ card }) {
  return (
    <div className="catalog__card" key={card.id}>
      <img src={card.img} className="img-card" alt="img" />
      {/* <p className="catalog__text">Цена {card.price}</p>
      <p className="catalog__text">Качество {card.quality}</p> */}
      <style className="hover" />
      <a href={`/createcard/${card.id}`}>
        <img src="/img/icon3.png" alt="" className="icon_style" />
      </a>
      <img
        src="/img/icon2.png"
        data-id={card.id}
        alt=""
        className="js-delete killAll icon_delete"
      />
    </div>
  );
};
