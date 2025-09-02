-- SET operators -> to combine multiple tables row wise

SELECT
	FirstName AS First_Name,
	LastName AS Last_Name
FROM Sales.Customers
UNION
SELECT
	FirstName,
	LastName
FROM Sales.Employees
ORDER BY FirstName;


-- UNION - return Distinct row values - remove duplicates

-- Combine the data from employees and customers into one table - can use UNION or UNION ALL
SELECT
	FirstName AS First_Name,
	LastName AS Last_Name
FROM Sales.Customers
UNION
SELECT
	FirstName,
	LastName
FROM Sales.Employees;


-- UNION ALL - allow duplicates - faster than UNION

-- Combine the data from employees and customers into one table, including duplicates

SELECT
	FirstName AS First_Name,
	LastName AS Last_Name
FROM Sales.Customers
UNION ALL
SELECT
	FirstName,
	LastName
FROM Sales.Employees;

-- EXCEPT - in other databases its called MINUS -> return distict rows from first query not also found in second query or not returning its rows

-- Find employess who are not customers at the same time

SELECT
	FirstName AS First_Name,
	LastName AS Last_Name
FROM Sales.Customers
EXCEPT
SELECT
	FirstName,
	LastName
FROM Sales.Employees;

-- INTERSECT - to get only common from both queries

-- Find employees who are also customers

SELECT
	FirstName AS First_Name,
	LastName AS Last_Name
FROM Sales.Customers
INTERSECT
SELECT
	FirstName,
	LastName
FROM Sales.Employees;




-- Orders are stored in seperate tables(Orders & OrdersArchive) Combine all orders into one report without duplicates
-- Setp1: Check colums of each tables & datatypes of each colums - if same UNION or not same then select particuler cols then UNION
-- SELECT
-- 	*
-- FROM Sales.Orders
-- UNION
-- SELECT
-- 	*
-- FROM Sales.OrdersArchive;

-- Best preactce -> Never use asterisk when UNION, list down all columns name you want
SELECT
	'Orders' AS SourceTable, -- Add source map to identify from which table its comming from if values are same of rows
	[OrderID]
	,[ProductID]
	,[CustomerID]
	,[SalesPersonID]
	,[OrderDate]
	,[ShipDate]
	,[OrderStatus]
	,[ShipAddress]
	,[BillAddress]
	,[Quantity]
	,[Sales]
	,[CreationTime]
FROM Sales.Orders
UNION
SELECT
	'OrdersArchieve' AS SourceTable,
	[OrderID]
    ,[ProductID]
    ,[CustomerID]
    ,[SalesPersonID]
    ,[OrderDate]
    ,[ShipDate]
    ,[OrderStatus]
    ,[ShipAddress]
    ,[BillAddress]
    ,[Quantity]
    ,[Sales]
    ,[CreationTime]
FROM Sales.OrdersArchive
ORDER BY OrderID;