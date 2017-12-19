const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

const campuses = [{
    name: 'Lunar',
    image: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8wOTEvb3JpZ2luYWwvanVseS1za3l3YXRjaGluZy1wb3J0bGFuZC5qcGc='
  },
  {
    name: 'Mars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg'
  },
  {
    name: 'Ceres',
    image: 'https://solarsystem.nasa.gov/images/content/PIA20182.jpg'
  }
];

const students = [{
  name: 'Bowie',
  email: 'majorTom@starman.com',
  CampusId: '2'
}, {
  name: 'Iggy',
  email: 'JesusThisIsIggy@stranger.com',
  CampusId: '1'
}, {
  name: 'Deborah',
  email: 'xOfender@gmail.com',
  CampusId: '3'
}, {
  name: 'Alice',
  email: 'ACooper@nightmare.com',
  CampusId: '1'
}, {
  name: 'Souixsie',
  email: 'kissthem4me@hkGarden.com',
  CampusId: '2'
}, {
  name: 'Peter',
  email: 'BelaLugosisDed@UndeadUndead.com',
  CampusId: '2'
}, {
  name: 'Poly',
  email: 'BondageUpUrs@oi.com',
  CampusId: '3'
}, ];


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus)))
  .then(() =>
    Promise.all(students.map(student =>
      Student.create(student)))
  );

const main = () => {
  console.log('Syncing db...');
  db.sync({
      force: true
    })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Database Seeded!')
      db.close();
      return null;
    });
};

main();
