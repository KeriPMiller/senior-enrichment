var db = require('../');
var Sequelize = require('sequelize');

var Student = db.define('Student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email : {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
})

module.exports = Student;
