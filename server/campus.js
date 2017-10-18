const router = require('express').Router()
const Student = require('../db/models/student')
const Campus = require('../db/models/campus')


router.get('/campuses/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses));
});

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, {include: {model: Student}})
  .then( campus => res.json(campus));
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
