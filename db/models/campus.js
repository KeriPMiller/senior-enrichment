var db = require('../');
// var Student = require('./student');
var Sequelize = require('sequelize');

var Campus = db.define('Campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
}, {

});

module.exports = Campus;
