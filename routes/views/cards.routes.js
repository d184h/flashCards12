const router = require('express').Router();
const { Card } = require('../../db/models');
const CardsList = require('../../components/CardsList');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.send(res.renderComponent(CardsList, { title: 'Темы', cards }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
