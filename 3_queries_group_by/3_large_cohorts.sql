SELECT cohorts.name AS cohort_name, COUNT(students) AS student_count
  FROM cohorts join students
    ON cohort_id = cohorts.id
  GROUP BY cohorts.id
  HAVING COUNT(students) >= 18
  ORDER BY COUNT(students)