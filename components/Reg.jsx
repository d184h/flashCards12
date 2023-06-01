const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <form>
        <div>
          <h1>Регистрация</h1>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Почта
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <a href="/cards">Зарегистрироваться</a>
        </button>
      </form>
    </Layout>
  );
}

module.exports = Reg;
