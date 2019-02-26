'use strict';
const User = require('/Users/fuad/Code/isTest/isTest/models/user.js');
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    
    
    amount: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User);
  };
  return Transaction;
};