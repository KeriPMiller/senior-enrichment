// const express = require('express');
const router = require('express').Router()
const Student = require('../db/models/student')

// Student Routes to refactor out
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.json(student));
});

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students));
});

router.post('/create', (req, res, next) => {
  data = req.body
  Student.create({name: data.name, email: data.email, CampusId: data.CampusId}, { fields: ['name', 'email', 'CampusId' ]})
  .then((student)=> res.sendStatus(200));
})

module.exports = router;
