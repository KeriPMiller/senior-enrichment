const router = require('express').Router()
const Student = require('../db/models/student')
const Campus = require('../db/models/campus')

router.get('/:campusId', (req, res, next) => {
  // Campus.findById(req.params.campusId)
  //   .then(campus => campus.findStudents())
  //   .then(data => res.json(data))
  // not a function; but isn't it an association method?
    // Campus.getStudents()
    // .then(students => res.json(students))
  // maybe make student find all a campus method to make more than one query?
    Student.findAll({
      where: {
        CampusId: req.params.campusId
      }
    })
    .then(students => res.json(students));
});

router.get('/campuses/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses));
});

router.post('/create', (req, res, next) => {
  data = req.body
  Campus.create({
      name: data.name,
      image: data.image
    }, {
      fields: ['name', 'image']
    })
    .then((campus) => res.sendStatus(200));
});

router.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body)
      .then(() => res.sendStatus(200))
    )
});

router.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.destroy()
      .then(() => res.sendStatus(204))
    )
});



module.exports = router;
