const React = require('react');



module.exports = function CaardView({ Cards }) {
  console.log('HouseContainer called');

  return (
    <div className="catalog row">
      {Cards.map((el) => (
        <div className="card catalog__card cardPika pika animated" key={el.id}>
          <img src={el.img} className="img-card" alt="img" />
          <style className="hover" />
          <button type="button" className="killAll delete">
            <img src="/img/icon.png" alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};
