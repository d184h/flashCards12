const router = require('express').Router();
const { Card } = require('../../db/models');
const CardsList = require('../../components/CardsList');
const { Quest } = require('../../db/models');
const QuestionItem = require('../../components/QuestionItem');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.send(res.renderComponent(CardsList, { title: 'Темы', cards }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:cardId/questions/:questionId', async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findOne({
      where: { id: cardId },
      include: { Quest },
    });
    const { questionId } = req.params;
    const question = await Quest.findOne({
      where: { id: questionId, cardId: cardId },
    });
    res.send(res.renderComponent(QuestionItem, { title: 'Вопросы', question }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
