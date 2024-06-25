-- NOTE for the checker: Answers start with '--//'

-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.

-- //select name from language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

-- //select film.title, film.description, language.name
-- //from film 
-- //inner join language
-- //on film.language_id = language.language_id

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

-- //select film.title, film.description, language.name
-- //from language
-- //left join film
-- //on film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- //create table new_film (
-- 	//id serial PRIMARY KEY,
-- 	//name varchar(50)
-- //);

-- //insert into new_film (name) values
-- 	//('Academy Dinosaur'),
-- 	//('Fauda'),
-- 	//('Rehov Sumsum');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- //create table customer_review(
-- 	//review_id serial not null,
-- 	//film_id int references new_film(id) on delete cascade,
-- 	//language_id int references language(language_id),
-- 	//title varchar(50),
-- 	//score int check (score>0 AND score<=10),
-- 	//review_text text,
-- 	//last_update date
-- //);

-- //alter table customer_review
-- //drop constraint customer_review_film_id_fkey 

-- //alter table customer_review
-- //add constraint customer_review_film_id_fkey foreign key (film_id) references new_film(id) on delete cascade

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
	
-- //insert into customer_review (film_id, language_id, title,score, review_text,last_update)
-- //values
-- //((select id from new_film where name = 'Academy Dinosaur'),(select language_id from language where name = 'English'),'Amazing movie', 8, 'One of the best movies Ive seen. Though its very short!','2024,06,25'),
-- //((select id from new_film where name = 'Fauda'),(select language_id from language where name = 'English'),'Bad movie', 4, 'Really boring!','2024,06,25');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- //delete from new_film where name = 'Academy Dinosaur'

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.



-- //update film
-- //set language_id = (select language_id from language where name = 'French')
-- //where title = 'Ace Goldfinger'

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- //? address_id is a foreign key for customer table. It affects the way in which we insert into customer table by whihc it cannot add an address_id that doesnt exist in address table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- //drop table customer_review

-- //explanation: it did work, it is an easy step, didnt require extra checking.

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


