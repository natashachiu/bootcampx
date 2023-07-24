DROP TABLE cohorts CASCADE;
DROP TABLE students CASCADE;

CREATE TABLE cohorts(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255) NOT NULL,
  start_date DATE, 
  end_date DATE);

CREATE TABLE students(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255) NOT NULL, 
  email VARCHAR(255), 
  phone VARCHAR(32), 
  github VARCHAR(255), 
  start_date DATE, 
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
  -- ON DELETE CASCADE - delete rows from the child table automatically
  -- when rows from the parent table are deleted
  );

