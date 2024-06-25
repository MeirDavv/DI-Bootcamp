-- UPDATE students
-- SET birth_date = '1998/11/02'
-- WHERE last_name = 'Benichou' AND first_name in ('Marc', 'Lea')

-- DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Count is easy won't do it

-- ALTER TABLE students
-- ADD math_grade integer

-- Update students
-- SET math_grade = 80
-- WHERE id = 1

-- Update students
-- SET math_grade = 40
-- WHERE id = 6

-- INSERT INTO students (last_name,first_name,birth_date,math_grade)
-- VALUES ('Simpson','Omer','1980-10-03',70)

-- SELECT first_name,last_name, COUNT(math_grade) AS number_of_grades FROM students GROUP BY first_name, last_name

-- SELECT SUM (math_grade) FROM students