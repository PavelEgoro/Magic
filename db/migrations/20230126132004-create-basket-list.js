/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BasketLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      basket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Baskets' },
          key: 'id',
        },
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Cards' },
          key: 'id',
        },
      },
      count: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('BasketLists');
  },
};
