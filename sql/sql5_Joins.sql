-- Combining tables -> Column wise -> SQL JOINS

-- Join Types

-- No Join (not actual type but considering)

-- Retrive all data from customers and orders as seperate results
SELECT
  *
FROM customers;
SELECT
  *
FROM orders;

-- Inner JOIN -> Returns only matching rows from both tables

-- Get all customers alson with their orders but only for customers who have placed an order
-- SELECT
--   id,
--   first_name,
--   order_id,
--   sales
-- FROM customers
-- INNER JOIN orders
--  ON id = customer_id; -- check by running seperetely for both tables to find what can match to join, generally ids or keys
-- NOTE: Column Ambiguity -> Add the table name before the column to avoid confusions in joins  with same-named columns
-- SELECT
-- 	customers.id,
-- 	customers.first_name,
-- 	orders.order_id,
-- 	orders.sales
-- FROM customers
-- INNER JOIN orders
-- ON customers.id = orders.customer_id;
-- some colums have larger name -> can use ALIAS AS
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
INNER JOIN orders AS o
ON c.id = o.customer_id;
-- SELECT
-- 	c.id,
-- 	c.first_name,
-- 	o.order_id,
-- 	o.sales
-- FROM orders AS o
-- INNER JOIN customers AS c
-- ON c.id = o.customer_id; -- interchange the order of tables give exact order


-- LEFT JOIN

-- Get all customers along with their orders, including those without orders
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id; -- here orders matter as it start from Table A

-- RIGHT JOIN

-- Gel all customers along with along with their orders, including orders without matching customers
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM customers AS c
RIGHT JOIN orders AS o
ON c.id = o.customer_id;
-- Gel all customers along with along with their orders, including orders without matching customers (Using LEFT JOIN) alternative to RIGHT JOIN - is change order of FROM and Joining table and use LEFT join
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM orders AS o
LEFT JOIN customers AS c
ON c.id = o.customer_id;


-- FULL JOIN - order of joining does not matter

-- Get all customers and all orders, even if there is no match
SELECT
	c.id,
	c.first_name,
	o.order_id,
	o.sales
FROM orders AS o
FULL JOIN customers AS c
ON c.id = o.customer_id;
