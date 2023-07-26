// a Pool manages multiple client connections
const { Pool } = require('pg');

const pool = new Pool({
  user: 'natashachiu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];

if (cohortName) {
  pool.query(`
  SELECT students.id as student_id, 
         students.name as name, 
         cohorts.name as cohort
  FROM students JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${cohortName}%'
  LIMIT 5;
  `)
    .then(res => {
      res.rows.forEach(user => {
        console.log(`${user.name} has an id of ${user.student_id} and was in ${user.cohort} cohort`);
      });
    })
    .catch(err => console.log('query error', err.stack));
}

