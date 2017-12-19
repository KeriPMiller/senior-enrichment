'use strict';
// require all models
const Student = require('./student');
const Campus = require('./campus');


// associations
Student.belongsTo(Campus);
Campus.hasMany(Student);


module.exports = {Student, Campus};
