-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- // The output will be 0
-- // Explanation: The subquery provides null, then the query ft.id not in (null) returns unknown. Then count of (unknown) is 0.

-- Q2. What will be the OUTPUT of the following statement?

--      SELECT COUNT(*) 
--      FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- //The output will be 2
-- //Explanation: The subquery returns 5, the query ft.id not in(5) returns 2 rows(null is not counted in where conditions - the condition: NULL not in (5) is unknown), hence we get count = 2

-- Q3. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- //The output will be 0
-- //Explanation: The subquery returns (5,NULL), then the query ft.id not in (5,NULL) returns null because anything not in (something,null) returns null. Hence count = 0

-- Q4. What will be the OUTPUT of the following statement?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- //The output will be 2
-- //Explanation: The subquery returns 5 and from that point its exactly like in question 2