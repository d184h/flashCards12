const React = require('react');
const Layout = require('./Layout');

function QuestionItem({ question }) {
  return (
    <Layout>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <img src={question.question} className="card-title" Card title />
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionItem;
