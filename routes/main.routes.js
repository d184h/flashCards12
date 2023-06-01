const router = require('express').Router();
const Reg = require('../components/Reg');

router.get('/', (req, res) => {
  res.send(res.renderComponent(Reg, { title: 'Регистрация' }));
});

module.exports = router;
