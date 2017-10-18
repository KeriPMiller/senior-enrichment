const router = require('express').Router()
const Student = require('../db/models/student')

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
});

router.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body)
      .then(() => res.sendStatus(200))
    )
});

router.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => student.destroy()
      .then(() => res.sendStatus(204))
    )
});

module.exports = router;
