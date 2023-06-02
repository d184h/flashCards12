const React = require('react');

function CardItem({ card }) {
  return (
    <div className='card text-bg-primary mb-3' style={{ maxWidth: '18rem' }}>
      <div className='card-header'>{card.name}</div>
      {/* <div className='card-body'></div> */}
    </div>
  );
}

module.exports = CardItem;
