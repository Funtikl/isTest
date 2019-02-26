'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: 100000,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:  {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
      amount: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};