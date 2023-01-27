const React = require('react');

module.exports = function CaardView({ Cards }) {
  console.log('HouseContainer called');

  return (
    <div className="catalog row">
      {Cards.map((el) => (
        <div className="card catalog__card cardPika pika animated" key={el.id}>
          <img src={el.img} className="img-card" alt="img" />
          <style className="hover" />
          <button type="button" className="killAll delete" id={el.id}>
            <img src="/img/icon.png" alt="" className="addCard" />
          </button>
          <div className="icon4">
            <img src="/img/icon4.png" alt="" />
            <span>{el.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
