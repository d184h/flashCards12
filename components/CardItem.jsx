const React = require('react');

function CardItem({ card }) {
  return (
    <div className="card text-bg-primary mb-3" style={{ maxWidth: '18rem' }}>
      <button className="card-header">
        <a href="/cards/">{card.name}</a>
      </button>
      {/* <div className='card-body'></div> */}
    </div>
  );
}

module.exports = CardItem;
