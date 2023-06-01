const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./CardItem');

function Animals({ title, cards }) {
  return (
    <Layout title={title} cards={cards}>
      <h1>Темы</h1>
      <div className="cardsList">
        {cards.map((card) => (
          <CardItem card={card} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Animals;
