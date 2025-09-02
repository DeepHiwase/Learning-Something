-- Advanced Joins

-- LEFT Anti JOIN
-- Step 1: first use normal JOIN query then check what u don't want from table B and apply that condition

-- Get all customers who haven't placed any order 
SELECT
  *
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id 
WHERE o.customer_id IS NULL;

-- RIGHT Anti JOIN

-- Get all orders without matching customers 
SELECT
  *
FROM customers AS c
RIGHT JOIN orders AS o
ON c.id = o.customer_id 
WHERE o.customer_id IS NULL;
-- Using LEFT ANTI JOIN for same above query for RIGHT ANTI JOIN
SELECT
  *
FROM orders AS o
LEFT JOIN customers AS c
ON c.id = o.customer_id 
WHERE c.id IS NULL;

-- FULL ANTI JOIN - order not matter in joining

-- Finding customers without orders and orders without customers

SELECT
  *
FROM customers AS c
FULL JOIN orders AS o
ON c.id = o.customer_id 
WHERE 
  o.customer_id IS NULL 
  OR 
  c.id IS NULL;



-- Get all customers along with their orders but only for customers who have placed an order (Without INNER JOIN)
SELECT
	*
FROM customers AS c
LEFT JOIN orders AS o
ON c.id = o.customer_id
WHERE o.customer_id IS NOT NULL;



-- CROSS JOIN

-- Generate all possible combination of customers and orders
SELECT
  *
FROM customers
CROSS JOIN orders;


-- Multi Join queries

-- Using SalesDB, Retrives a list of all orders, along with the related
-- customer, product, and employee details
-- For each order, display
-- Order ID
-- Customer's Name
-- Product Name
-- Sales amount
-- Product Price
-- SalePerson's name

USE SalesDB;

-- Check for all database to see what all have

-- SELECT * FROM Sales.Customers;
-- SELECT * FROM Sales.Employees;
-- SELECT * FROM Sales.Products;
-- SELECT * FROM Sales.Orders;
-- SELECT * FROM Sales.OrdersArchive;

-- SELECT
-- 	o.OrderID,
-- 	o.Sales,
-- 	c.FirstName,
-- 	c.LastName
-- FROM Sales.Orders AS o
-- LEFT JOIN Sales.Customers AS c
-- ON o.CustomerID = c.CustomerID;

-- SELECT
-- 	o.OrderID,
-- 	o.Sales,
-- 	c.FirstName,
-- 	c.LastName,
-- 	p.Product AS ProductName,
-- 	p.Price
-- FROM Sales.Orders AS o
-- LEFT JOIN Sales.Customers AS c
-- ON o.CustomerID = c.CustomerID
-- LEFT JOIN Sales.Products AS p
-- ON o.ProductID = p.ProductID;

--  SELECT
-- 	o.OrderID,
-- 	o.Sales,
-- 	c.FirstName,
-- 	c.LastName,
-- 	p.Product AS ProductName,
-- 	p.Price,
-- 	e.FirstName,
-- 	e.LastName
-- FROM Sales.Orders AS o
-- LEFT JOIN Sales.Customers AS c
-- ON o.CustomerID = c.CustomerID
-- LEFT JOIN Sales.Products AS p
-- ON o.ProductID = p.ProductID
-- LEFT JOIN Sales.Employees AS e
-- ON o.SalesPersonID = e.EmployeeID;

SELECT
	o.OrderID,
	o.Sales,
	c.FirstName AS CustomerFirstName,
	c.LastName AS SuctomerLastName,
	p.Product AS ProductName,
	p.Price,
	e.FirstName AS EmployeeFirstName,
	e.LastName AS EmployeeLastName
FROM Sales.Orders AS o
LEFT JOIN Sales.Customers AS c
ON o.CustomerID = c.CustomerID
LEFT JOIN Sales.Products AS p
ON o.ProductID = p.ProductID
LEFT JOIN Sales.Employees AS e
ON o.SalesPersonID = e.EmployeeID;