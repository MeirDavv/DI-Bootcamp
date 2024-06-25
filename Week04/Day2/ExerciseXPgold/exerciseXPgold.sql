-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.

-- //SELECT rating, COUNT(*) FROM film GROUP BY rating

-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.

-- //SELECT title, rating, length, rental_rate FROM film WHERE rating in ('G', 'PG-13') AND length > 120 AND rental_rate < 3.00 ORDER BY title 

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.

-- //UPDATE customer
-- //SET first_name = 'Meir', last_name = 'Davidov'
-- //WHERE customer_id = 1

-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).


-- //UPDATE address a
-- //SET address = 'Someplace 1913'
-- //FROM address a1
-- //INNER JOIN customer
-- //ON a1.address_id = customer.address_id
-- //WHERE customer.customer_id = 1


-- SELECT customer.customer_id, customer.first_name, customer.last_name, address.address
-- FROM customer
-- FULL JOIN address
-- ON customer.address_id = address.address_id
-- WHERE customer.customer_id = 1;
