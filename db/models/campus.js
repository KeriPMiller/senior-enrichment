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
  // students: {
  //   type: Sequelize.VIRTUAL,
  //   get() {
  //     // return Campus.getStudents();
  //     return this.findStudents()
  //   }
  // }
}, {
  //   // this gets an array of students with matching ids but i need to attach it as a fetachable property...
  //   getterMethods: {
  //     findStudents: function() {
  //       return Student.findAll({
  //         where: {
  //           CampusId: this.id
  //         }
  //       })
  //       // .then( students => console.log(students));
  //     }
  //   },
  //   {
  //     setterMethods: {
  //       setStudents: function(findStudents) {
  //         const foundStudents = findStudents.slice();
  //         this.students = foundStudents
  //       }
});
// 
// Campus.prototype.findStudents = () => {
//   return
//   (Student.findAll({
//     where: {CampusId: this.id}
//   })
//   .then(students => students))
// }

module.exports = Campus;
