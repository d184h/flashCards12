const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <form id='reg'>
        <div>
          <h1>Регистрация</h1>
        </div>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Имя
          </label>
          <input
            name='name'
            type='text'
            className='form-control'
            required
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Почта
          </label>
          <input
            name='email'
            type='text'
            className='form-control'
            required
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Пароль
          </label>
          <input
            name='password'
            type='password'
            className='form-control'
            required
            id='exampleInputPassword1'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
}

module.exports = Reg;
