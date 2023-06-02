const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./CardItem');

function CardList({ title, cards, question, users }) {
  console.log(users);
  return (
    <Layout title={title} cards={cards} question={question} users={users}>
      <h1>Темы</h1>
      <h3>Добро пожаловать в игру, {users[users.length - 1].name}</h3> <br />
      <div className="cardsList">
        {cards.map((card) => (
          <CardItem card={card} question={question} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardList;
