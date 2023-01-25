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
          name: 'Поглощение',
          price: 100,
          img: '/img/card/card1.jpg',
          user_id: 1,
          quality: 3,
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
