const React = require('react');
const Layout = require('./Layout');

function QuestionItem({ question }) {
  console.log(question.id);
  return (
    <Layout>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src={question.question} className="card-title" Card title />
          <p className="hidden">Правильный ответ: {question.answer}</p>
          <input type="text" placeholder="Ответ" />
          <button className="btn btn-primary btn-answer">Ответить</button>
          <button
            className="btn btn-primary btn-next"
            data-id={question.id + 1}
          >
            <a href={`${question.id + 1}`}>Далее</a>
          </button>
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionItem;

// button -> data-id={question.id+1}
// e.target.dataset.id -> get fetch('/quest/${de.target.dataset.id}')
