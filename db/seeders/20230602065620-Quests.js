'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Quests',
      [
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/87c96fa1-2eb7-4d91-a7e1-7d77c67543bd.jpg',
          answer: 'Батарейка',
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/1500a054-a532-46c1-bd10-a16b702613df.jpg',
          answer: 'Голубой вагон',
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/83bc669b-a599-4ec3-8358-6d43e158b2d1.jpg',
          answer: 'Тает лед',
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/1c806691-73be-4ed9-9175-6684ae94f4a3.jpg',
          answer: 'Розовое вино',
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/dc572a32-3aae-4c9d-8300-2201bf6f166d.jpg',
          answer: 'Серцеедка',
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/054e2709-eb7d-49da-bc5a-ad3f68abec07.jpg',
          answer: 'Джанго освобожденный',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/39260b67-ac06-4148-b4e4-09b8c9cfba49.jpg',
          answer: 'Служебный роман',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/05391a41-2f0c-4d55-8679-a0e28b446a0f.jpg',
          answer: 'Стражи галактики',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/3ce81c7e-2eba-44a6-a018-8516676d8ef4.jpg',
          answer: 'Паразиты',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/73429eed-d699-43e2-b8c4-17ebf8153ef7.jpg',
          answer: 'Я иду искать',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/73acc8a1-fc02-4678-95fe-fcf8ee5d940c.jpg',
          answer: 'Игры разума',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/de5aa112-d656-4372-9af6-05ea1d798d52.jpg',
          answer: 'Неадекватная люди',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'https://cdn2.myquiz.ru/userphotos/800/36da4813-54ba-467c-8866-196201381c7c.jpg',
          answer: 'Дюна',
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Quests', null, {});
  },
};
