-- In this exercise we will be using the actors table from todays lesson.

CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name,last_name,age,number_oscars)
VALUES ('Matt','Damon', '1970-10-08',5)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('George','Clooney','06/05/1961', 2);

-- 1. Count how many actors are in the table.

SELECT COUNT(*) FROM actors;

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('new','actor', , )

-- The outcome is error because the column expect a value and we provided blank value
-- Also we can try:

INSERT INTO actors (first_name, last_name)
VALUES ('new','actor')

-- But this won't work as well since these columns are set to NOT NULL - can't be blank

