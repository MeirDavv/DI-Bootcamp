-- CREATE TABLE purchases (
-- 	id serial PRIMARY KEY,
-- 	customer_id serial,
-- 	item_id serial,
-- 	quantity_purchased integer,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(id),
-- 	FOREIGN KEY (item_id) REFERENCES items(id)
-- );




-- INSERT INTO purchases (customer_id, item_id,quantity_purchased)
-- VALUES ((SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'
-- ), (SELECT id FROM items WHERE title = 'Fan'), 1);

-- INSERT INTO purchases (customer_id,item_id,quantity_purchased)
-- VALUES ((SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
-- 	(SELECT id FROM items WHERE title = 'Large desk'), 10);

INSERT INTO purchases (customer_id,item_id,quantity_purchased)
VALUES ((SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
	(SELECT id FROM items WHERE title = 'Small Desk'), 2);