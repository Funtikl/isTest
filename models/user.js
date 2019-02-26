'use strict';
const Transaction = require('/Users/fuad/Code/isTest/isTest/models/transaction.js');
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {instanceMethods: {
    generateHash: function (password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    },
    validPassword: function (password) {
      return bcrypt.compareSync(password, this.password)
    }
  }});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};