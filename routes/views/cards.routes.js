const router = require('express').Router();
const { Card } = require('../../db/models');
const CardsList = require('../../components/CardsList');
const { Quest } = require('../../db/models');
const QuestionItem = require('../../components/QuestionItem');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    const question = await Quest.findAll({ raw: true });
    const users = await User.findAll({ raw: true });
    res.send(
      res.renderComponent(CardsList, { title: 'Темы', cards, question, users })
    );
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get(`/${2}/questions/${1}`, (req, res) => {
  try {
    res.redirect(`/cards/${2}/questions/${6}`);
  } catch (error) {
    // res.redirect('/cards');
  }
});

router.get('/:cardId/questions/:questionId', async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findOne({
      where: { id: cardId },
      include: { model: Quest },
    });
    const { questionId } = req.params;
    const question = await Quest.findOne({
      where: { id: questionId, cardId: cardId },
    });
    res.send(res.renderComponent(QuestionItem, { title: 'Вопросы', question }));
  } catch ({ message }) {
    // res.json({ message });
    res.redirect('/cards');
  }
});

// router.get(`/:cardId/questions/:questionId`, async (req, res) => {
//   try {
//     const { cardId } = req.params;
//     const card = await Card.findOne({
//       where: { id: cardId },
//       include: { model: Quest },
//     });
//     const { questionId } = req.params;
//     const question = await Quest.findOne({
//       where: { id: questionId, cardId: cardId },
//     });
//     res.send(res.renderComponent(QuestionItem, { title: 'Вопросы', question }));
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

module.exports = router;
