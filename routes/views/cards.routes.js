const router = require('express').Router();
const { Card } = require('../../db/models');
const CardsList = require('../../components/CardsList');
const { Quest } = require('../../db/models');
const QuestionItem = require('../../components/QuestionItem');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.send(res.renderComponent(CardsList, { title: 'Темы', cards }));
  } catch (error) {
    res.json(error.message);
  }
});

router.get('/questions/:cardId', async (req, res) => {
  try {
    const { cardId } = req.params;
    const question = Quest.findOne({ where: { id: cardId } });
    res.send(res.renderComponent(QuestionItem, { title: 'Вопросы', question }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
