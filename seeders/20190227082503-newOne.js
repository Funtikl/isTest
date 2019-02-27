'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Transaction', [{
        id:100001,
        amount:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Transaction', null, {});

  }
};
