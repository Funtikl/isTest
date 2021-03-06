'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Users', [{
        id:100001,
        name: 'John',
        email:'examplemail@gmail.com',
        password:'testpass',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Users', null, {});

  }
};
