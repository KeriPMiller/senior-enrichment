const router = require('express').Router()
const Student = require('../db/models/student')
const Campus = require('../db/models/campus')
// Campus part to refactor out

router.get('/:campusId', (req, res, next) => {
  Student.findAll({
    where: {CampusId: req.params.campusId}
  })
    .then(students => res.json(students));
});

router.get('/campuses/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses));
})

module.exports = router;
