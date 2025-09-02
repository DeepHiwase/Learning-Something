-- Filtering

-- Many operators use with WHERE clause

-- Comparison ops -> =, <>, =!, >, <, >=, <=

-- Retrive all customers from Germany
SELECT
  *
FROM customers
WHERE country = 'Germany';

-- Retrive all customers who are not from Germany
SELECT
  *
FROM customers
WHERE country != 'Germany';
-- != is same as <> as both gives same result
SELECT
  *
FROM customers
WHERE country <> 'Germany';

-- Retrive all customers with a score greater than 500
SELECT
  *
FROM customers
WHERE score > 500;

-- Retrive all customers with a score  500 or more
SELECT
  *
FROM customers
WHERE score >= 500;

-- Retrive all customers with a score lesser than 500
SELECT
  *
FROM customers
WHERE score < 500;

-- Retrive all customers with a score  500 or less
SELECT
  *
FROM customers
WHERE score <= 500;


-- Logical operatore -> AND, OR, NOT

-- Retrive all customers who are from the USE AND have a score greater than 500
SELECT
  *
FROM customers
WHERE 
country = 'USA' AND
score > 500;

-- Retrive all customers who are either from the USE OR have a score greater than 500
SELECT
  *
FROM customers
WHERE 
country = 'USA' OR
score > 500;

-- Retrive all customers who socred NOT less than 500
SELECT
  *
FROM customers
WHERE NOT score < 500; -- socre >= 500


-- Range operator -> BETWEEN

-- Retrive all customers whose score falls in the range BETWEEN 100 and 500
SELECT
  *
FROM customers
WHERE score BETWEEN 100  AND 500;
-- Without between -> using comaprision and logical ops -- TIP: USe this instead od BETWEEN as it clearly show boundaries are inclusive(included) or not
SELECT
  *
FROM customers
WHERE score >= 100  AND score <=500;



-- Membership operator - IN, NOT IN -> tells if it exist or not -> true false and then only retunr query answer
-- SELECT
--   *
-- FROM customers
-- WHERE country = 'Germany' OR country = 'USA';
-- Here can use IN
SELECT
  *
FROM customers
WHERE country IN ('Germany', 'USA');
-- NOT IN
SELECT
  *
FROM customers
WHERE country NOT IN ('Germany', 'USA');



-- Search operator - LIKE - search with similer pattern

-- LIKE

-- Find all customers whose first name starts with 'M'
SELECT
  *
FROM customers
WHERE first_name LIKE 'M%';

-- Find all customers whose first name ends with 'n'
SELECT
  *
FROM customers
WHERE first_name LIKE '%n';

-- Find all customers whose first name contains an 'r'
SELECT
  *
FROM customers
WHERE first_name LIKE '%r%';

-- Find all customers whose first name has an 'r' on third position
SELECT
  *
FROM customers
WHERE first_name LIKE '__r%';
