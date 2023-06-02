const router = require('express').Router();
const Reg = require('../components/Reg');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.send(res.renderComponent(Reg, { title: 'Регистрация' }));
});

//база
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const newUser = await User.create({
      score: 0,
      name,
      email,
      password,
    });
  }

  res.json({
    message: 'success',
    // html: res.renderComponent(AnimalItem, { : newAnimal }, { htmlOnly: true }),
  });
});
module.exports = router;
