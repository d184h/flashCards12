const React = require('react');

function CardItem({ card, question }) {
  return (
    <div
      data-id={card.id}
      className="card text-bg-primary mb-3"
      style={{ maxWidth: '18rem' }}
    >
      <button className="card-header">
        <a href={`/cards/${card.id}/questions/${question.id}`}>{card.name}</a>
      </button>
      {/* <div className='card-body'></div> */}
    </div>
  );
}

module.exports = CardItem;
