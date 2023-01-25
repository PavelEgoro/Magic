/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Поглощение',
          price: 100,
          img: '/img/card/card1.jpg',
          user_id: 1,
          quality: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Помощник Абуны',
          price: 100,
          img: '/img/card/card2.jpg',
          user_id: 1,
          quality: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Невероятная Выносливость',
          price: 100,
          img: '/img/card/card3.jpg',
          user_id: 1,
          quality: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Внезапный Распад',
          price: 100,
          img: '/img/card/card4.jpg',
          user_id: 1,
          quality: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Абзанская Проводница',
          price: 100,
          img: '/img/card/card5.jpg',
          user_id: 1,
          quality: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ученый Диспут',
          price: 100,
          img: '/img/card/card6.jpg',
          user_id: 1,
          quality: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дрейк Академии',
          price: 100,
          img: '/img/card/card7.jpg',
          user_id: 1,
          quality: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Превозносимая Претендентка',
          price: 100,
          img: '/img/card/card8.jpg',
          user_id: 1,
          quality: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Архилич Асерерак',
          price: 100,
          img: '/img/card/card9.jpg',
          user_id: 1,
          quality: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Служительница Недугов',
          price: 100,
          img: '/img/card/card10.jpg',
          user_id: 1,
          quality: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
