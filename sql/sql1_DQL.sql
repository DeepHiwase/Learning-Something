-- Single Line Comment
/* 
  Multi-Line comment
 */

 -- To use database
 -- Syntax -> USE <database-name>
USE MyDatabase

-- QUERY Language -> DQL (Database Query Language) - eg. SELECT(with FROM)


-- SELECT

-- Retrive all Customer data

SELECT *
FROM customers;

-- Retrive all Order data

SELECT *
FROM orders;

-- Retrive few columns
-- Retrive each customer's name, country, & score

SELECT
    first_name,
    country,
    score -- Note: no trailing comma, as it tells there is another column after this.
FROM customers;

SELECT
    first_name,
    score, -- Note: change the order of retrived table also
    country,
FROM customers;

-- WHERE -> puts condition - removes rows that not satisfies the condition
-- syntax -> WHERE condition

-- Retrive customers with a score not equal to 0

SELECT
  *
FROM customers
WHERE score != 0;

-- Retrive customers from germany

SELECT
  first_name,
  country
FROM customers
WHERE country = 'Germany'; -- Note: string value in ''; number without quote

-- ORDER BY - for sorting data -> ascending / descending - by default ascending
-- Note: always try to give the value of sorting instead of depending on default for ascending, this helps others to understand sorting

-- ASC / DESC

-- Retrive all customers and sort the results by the highest score first

SELECT
  *
FROM customers
ORDER BY score DESC;

-- Retrive all customers and sort the results by the lowest score first

SELECT
  *
FROM customers
ORDER BY score ASC;


-- (Nested) ORDER BY -> sorting with multiple columns
-- use when multiple values are same in a sorted colume and due to this another colums become unsorted in any direstion.
-- to sort both solumns - use nested ORDER BY

-- Retrive all customers and sort the results by the country and then by the highest score

SELECT
  *
FROM customers
ORDER BY
  country ASC,
  score   DESC;

-- Note: Imp: Column order in ORDER BY is crucial, as sorting is sequential
-- as it can be possible if first sorting has no duplicate so not sort the second sort mechanism given in nested ORDER BY

-- GROUP BY -> for grouping / aggregating data
-- GROUP BY comes between WHERE & ORDER BY

/* 
WHERE
GROUP BY
ORDER BY
*/

-- Find total score for each country
-- each country -> meaning combining
-- total score -> aggreation and sum
-- column needed -> score , country
-- combine by -> country
-- combine what / operation to do -> SUM -> on which column -> score -> SUM(score)


/* SELECT
  country,
  SUM(score) -- but this show new agggregated score sum with no column name -> give it a ALIAS - AS <new_colum_name>
FROM customers
GROUP BY country; */

-- AS - ALIAS shorthand only work for that specific query, can't use it for another query same as example new column for query can't use
-- in another query to reference that
-- not actual tables column name, its for only that specific query
-- not necessary to put only on aggragate function columns only, you can put on 'country AS country_name' as well but not necessary

SELECT
  country,
  SUM(score) AS total_score
FROM customers
GROUP BY country;

/* SELECT
  country,
  first_name,    -- ERROR -> GROUP BY Rule: All cols in SELECT must be either aggregated OR included in GROUP BY
  SUM(score) AS total_score
FROM customers
GROUP BY country; */

SELECT
  country,
  first_name
  SUM(score) AS total_score
FROM customers
GROUP BY 
  country, 
  first_name;

-- Result of GROUP BY determined by the unique values of the grouped colums

-- Find total score & total no. of customers for each country

SELECT
  country,
  COUNT(id) AS count_of_customers,
  SUM(score) AS total_scores
FROM customers
GROUP BY country;

-- HAVING -> use to filter the data but after Aggregation
--        -> can use having only with GROUP BY (after it)
-- syntax -> GROUP BY <>
--           HAVING <conditon>

SELECT
  country,
  COUNT(id) AS count_of_customers,
  SUM(score) AS total_scores
FROM customers
GROUP BY country
HAVING SUM(score) > 800;

-- Find the avg score for each country 
-- considering only customers with a score not equal to 0
-- and return only those countries with an avg score greater than 430

/* SELECT
  id, -- as its not included in GROUP BY - so remove it as not op on id also
  country,
  AVG(score) AS avg_score
FROM customers
WHERE score != 0
GROUP BY country
HAVING AVG(score) > 430; */

SELECT
  country,
  AVG(score) AS avg_score
FROM customers
WHERE score != 0
GROUP BY country
HAVING AVG(score) > 430;


-- DISTINCT -> remove duplicates from data

-- Return unique list of all countries
SELECT DISTINCT
 country
FROM customers;

-- TOP (Limit) - another clause use with SELECT to limit the no. of data being retrived

-- Retrive only 3 customers
SELECT TOP 3
  *
FROM customers;

-- Retrive TOP 3  customers with the highest scores
SELECT TOP 3
  *
FROM customers
ORDER BY score DESC;

-- Retrive the lowest 2 customers based on the score
SELECT TOP 2
  *
FROM customers
ORDER BY score ASC;

-- GET two most recent orders
SELECT TOP 2
  *
FROM orders
ORDER BY order_date DESC;

-- Execution order VS Coding order

-- Coding Order
SELECT DISTINCT TOP 2
  Col1,
  Col2
FROM table1
WHERE Col1 = 10
GROUP BY Col1
HAVING SUM(Col2) > 30
ORDER BY Col2 ASC;

-- Execution order
1. FROM
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT DISTINCT
6. ORDER BY
7. TOP

-- Multi-queries
-- in single query file if execute both, the result will show two or more windows depending on no. of select queries
SELECT *
FROM customers;

SELECT *
FROM orders;

-- Static (fixed) values - just for us to show a static value in the row
SELECT 123

SELECT 123 AS static_number;

SELECT 'Hello' AS static_number;

SELECT
  id,
  first_name
  'New Customer' AS customer_type
From customers;

-- Highlight & execute
-- in sql editor -> can highlight and execute some part of query  - helpful to reduce writing more queries - also help to run seperate
-- queries from multi-query file 