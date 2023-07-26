// a Pool manages multiple client connections
const { Pool } = require('pg');

const pool = new Pool({
  user: 'natashachiu',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];


pool.query(`
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE
    cohorts.name LIKE '%${cohortName || 'JUL02'}%'
  ORDER BY
    teacher
  `)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch(err => console.log('query error', err.stack));

