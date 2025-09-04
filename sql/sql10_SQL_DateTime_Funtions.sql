-- SQL date time functions

SELECT
	OrderDate, -- date
	ShipDate, -- date
	CreationTime -- datetime2 datatype in SQL server
FROM Sales.Orders;

-- Accessing date value
SELECT
	CreationTime, -- selecting date value containing col
	'2025-08-18' AS Hardcoded, -- static date value column
	GETDATE() AS Today -- GETDATE() returns todays date when the query is run in each Today col rows
FROM Sales.Orders;

-- Part extraction functions
-- DAY, MONTH, YEAR
SELECT
	CreationTime,
	YEAR(CreationTime) AS Year,
	MONTH(CreationTime) AS Month,
	DAY(CreationTime) AS Day
FROM Sales.Orders;

-- DATEPART - use to get week, querter, year, month, day, hour, minute, second, weekday(sunday), millisecond etc - return number
SELECT
	CreationTime,
	DATEPART(year, CreationTime) AS Year_dp,
	DATEPART(month, CreationTime) AS Month_dp,
	DATEPART(day, CreationTime) AS Day_dp,
	DATEPART(hour, CreationTime) AS hour_dp,
	DATEPART(week, CreationTime) AS Week_dp,
	DATEPART(quarter, CreationTime) AS quarter_dp,
	DATEPART(Weekday, CreationTime) AS weekday_dp,
	DATEPART(minute, CreationTime) AS minute_dp,
	DATEPART(second, CreationTime) AS second_dp,
	DATEPART(millisecond, CreationTime) AS millisecond_dp,
	YEAR(CreationTime) AS Year,
	MONTH(CreationTime) AS Month,
	DAY(CreationTime) AS Day
FROM Sales.Orders;

-- DATENAME - returns name of specific part of a date - returns string

SELECT
	CreationTime,
	-- DATENAME
	DATENAME(weekday, CreationTime) AS weekday_dn, -- Sunday
	DATENAME(month, CreationTime) AS month_dn, -- January
	DATENAME(day, CreationTime) AS day_dn, -- '22' but as string
	DATENAME(year, CreationTime) AS year_dn, -- '2025' but as string
	-- DATEPART
	DATEPART(year, CreationTime) AS Year_dp,
	DATEPART(month, CreationTime) AS Month_dp,
	DATEPART(day, CreationTime) AS Day_dp,
	DATEPART(Weekday, CreationTime) AS weekday_dp,
	YEAR(CreationTime) AS Year,
	MONTH(CreationTime) AS Month,
	DAY(CreationTime) AS Day
FROM Sales.Orders;

-- DATETRUNC - returns datetime with resetting all other values in the date
-- date part resets to 01, time part resets to 00

SELECT
	CreationTime,
	-- DATETRUNC
	DATETRUNC(minute, CreationTime) AS minute_dt, -- 2025-01-01 12:34:00.0000000
	DATETRUNC(hour, CreationTime) AS hour_dt, -- 2025-01-01 12:00:00.0000000
	DATETRUNC(month, CreationTime) AS month_dt, -- 2025-01-01 00:00:00.0000000
	DATETRUNC(year, CreationTime) AS year_dt, -- 2025-01-01 00:00:00.0000000
	-- DATEPART
	DATEPART(year, CreationTime) AS Year_dp,
	DATEPART(month, CreationTime) AS Month_dp,
	DATEPART(day, CreationTime) AS Day_dp,
	DATEPART(Weekday, CreationTime) AS weekday_dp,
	YEAR(CreationTime) AS Year,
	MONTH(CreationTime) AS Month,
	DAY(CreationTime) AS Day
FROM Sales.Orders;

-- ex: if count no. of orders yearwise
SELECT
	-- DATETRUNC
	DATETRUNC(year, CreationTime) AS year_dt,
	COUNT(*)
FROM Sales.Orders
GROUP BY DATETRUNC(year, CreationTime);

-- EOMONTH - retunrs end of month

SELECT
	OrderID,
	CreationTime,
	EOMONTH(CreationTime) AS EndOfMonth,
	CAST(DATETRUNC(month, CreationTime) AS DATE) AS FirstDayOfMonth
FROM Sales.Orders;

-- How many orders were placed in each year
-- SELECT
-- 	DATETRUNC(year, OrderDate) AS year_dt,
-- 	COUNT(*) AS NoOfOrders
-- FROM Sales.Orders
-- GROUP BY DATETRUNC(year, OrderDate);

SELECT
	YEAR(OrderDate) AS year,
	COUNT(*) AS NoOfOrders
FROM Sales.Orders
GROUP BY YEAR(OrderDate);

-- How many orders were placed in each month
-- SELECT
-- 	DATETRUNC(month, OrderDate) AS month_dt,
-- 	COUNT(*) AS NoOfOrders
-- FROM Sales.Orders
-- GROUP BY DATETRUNC(month, OrderDate);

-- SELECT
-- 	MONTH(OrderDate) AS month,
-- 	COUNT(*) AS NoOfOrders
-- FROM Sales.Orders
-- GROUP BY MONTH(OrderDate);

SELECT
	DATENAME(month, OrderDate) AS month,
	COUNT(*) AS NoOfOrders
FROM Sales.Orders
GROUP BY DATENAME(month, OrderDate);

-- Show all orders that were placed during the month of february
-- SELECT
-- 	*,
-- 	DATENAME(month, CreationTime) AS month
-- FROM Sales.Orders
-- WHERE DATENAME(month, CreationTime) = 'February';

-- Filerting data with numbers is always faster than using string

SELECT
	*
FROM Sales.Orders
WHERE MONTH(OrderDate) = 2;



---
SELECT 
    'Year' AS DatePart, 
    DATEPART(year, GETDATE()) AS DatePart_Output,
    DATENAME(year, GETDATE()) AS DateName_Output,
    DATETRUNC(year, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'YY', 
    DATEPART(yy, GETDATE()) AS DatePart_Output,
    DATENAME(yy, GETDATE()) AS DateName_Output, 
    DATETRUNC(yy, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'YYYY', 
    DATEPART(yyyy, GETDATE()) AS DatePart_Output,
    DATENAME(yyyy, GETDATE()) AS DateName_Output, 
    DATETRUNC(yyyy, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Quarter', 
    DATEPART(quarter, GETDATE()) AS DatePart_Output,
    DATENAME(quarter, GETDATE()) AS DateName_Output, 
    DATETRUNC(quarter, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'QQ', 
    DATEPART(qq, GETDATE()) AS DatePart_Output,
    DATENAME(qq, GETDATE()) AS DateName_Output, 
    DATETRUNC(qq, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Q', 
    DATEPART(q, GETDATE()) AS DatePart_Output,
    DATENAME(q, GETDATE()) AS DateName_Output, 
    DATETRUNC(q, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Month', 
    DATEPART(month, GETDATE()) AS DatePart_Output,
    DATENAME(month, GETDATE()) AS DateName_Output, 
    DATETRUNC(month, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'MM', 
    DATEPART(mm, GETDATE()) AS DatePart_Output,
    DATENAME(mm, GETDATE()) AS DateName_Output, 
    DATETRUNC(mm, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'M', 
    DATEPART(m, GETDATE()) AS DatePart_Output,
    DATENAME(m, GETDATE()) AS DateName_Output, 
    DATETRUNC(m, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'DayOfYear', 
    DATEPART(dayofyear, GETDATE()) AS DatePart_Output,
    DATENAME(dayofyear, GETDATE()) AS DateName_Output, 
    DATETRUNC(dayofyear, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'DY', 
    DATEPART(dy, GETDATE()) AS DatePart_Output,
    DATENAME(dy, GETDATE()) AS DateName_Output, 
    DATETRUNC(dy, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Y', 
    DATEPART(y, GETDATE()) AS DatePart_Output,
    DATENAME(y, GETDATE()) AS DateName_Output, 
    DATETRUNC(y, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Day', 
    DATEPART(day, GETDATE()) AS DatePart_Output,
    DATENAME(day, GETDATE()) AS DateName_Output, 
    DATETRUNC(day, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'DD', 
    DATEPART(dd, GETDATE()) AS DatePart_Output,
    DATENAME(dd, GETDATE()) AS DateName_Output, 
    DATETRUNC(dd, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'D', 
    DATEPART(d, GETDATE()) AS DatePart_Output,
    DATENAME(d, GETDATE()) AS DateName_Output, 
    DATETRUNC(d, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Week', 
    DATEPART(week, GETDATE()) AS DatePart_Output,
    DATENAME(week, GETDATE()) AS DateName_Output, 
    DATETRUNC(week, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'WK', 
    DATEPART(wk, GETDATE()) AS DatePart_Output,
    DATENAME(wk, GETDATE()) AS DateName_Output, 
    DATETRUNC(wk, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'WW', 
    DATEPART(ww, GETDATE()) AS DatePart_Output,
    DATENAME(ww, GETDATE()) AS DateName_Output, 
    DATETRUNC(ww, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Weekday', 
    DATEPART(weekday, GETDATE()) AS DatePart_Output,
    DATENAME(weekday, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'DW', 
    DATEPART(dw, GETDATE()) AS DatePart_Output,
    DATENAME(dw, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'Hour', 
    DATEPART(hour, GETDATE()) AS DatePart_Output,
    DATENAME(hour, GETDATE()) AS DateName_Output, 
    DATETRUNC(hour, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'HH', 
    DATEPART(hh, GETDATE()) AS DatePart_Output,
    DATENAME(hh, GETDATE()) AS DateName_Output, 
    DATETRUNC(hh, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Minute', 
    DATEPART(minute, GETDATE()) AS DatePart_Output,
    DATENAME(minute, GETDATE()) AS DateName_Output, 
    DATETRUNC(minute, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'MI', 
    DATEPART(mi, GETDATE()) AS DatePart_Output,
    DATENAME(mi, GETDATE()) AS DateName_Output, 
    DATETRUNC(mi, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'N', 
    DATEPART(n, GETDATE()) AS DatePart_Output,
    DATENAME(n, GETDATE()) AS DateName_Output, 
    DATETRUNC(n, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Second', 
    DATEPART(second, GETDATE()) AS DatePart_Output,
    DATENAME(second, GETDATE()) AS DateName_Output, 
    DATETRUNC(second, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'SS', 
    DATEPART(ss, GETDATE()) AS DatePart_Output,
    DATENAME(ss, GETDATE()) AS DateName_Output, 
    DATETRUNC(ss, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'S', 
    DATEPART(s, GETDATE()) AS DatePart_Output,
    DATENAME(s, GETDATE()) AS DateName_Output, 
    DATETRUNC(s, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Millisecond', 
    DATEPART(millisecond, GETDATE()) AS DatePart_Output,
    DATENAME(millisecond, GETDATE()) AS DateName_Output, 
    DATETRUNC(millisecond, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'MS', 
    DATEPART(ms, GETDATE()) AS DatePart_Output,
    DATENAME(ms, GETDATE()) AS DateName_Output, 
    DATETRUNC(ms, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'Microsecond', 
    DATEPART(microsecond, GETDATE()) AS DatePart_Output,
    DATENAME(microsecond, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'MCS', 
    DATEPART(mcs, GETDATE()) AS DatePart_Output,
    DATENAME(mcs, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'Nanosecond', 
    DATEPART(nanosecond, GETDATE()) AS DatePart_Output,
    DATENAME(nanosecond, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'NS', 
    DATEPART(ns, GETDATE()) AS DatePart_Output,
    DATENAME(ns, GETDATE()) AS DateName_Output, 
    NULL AS DateTrunc_Output
UNION ALL
SELECT 
    'ISOWeek', 
    DATEPART(iso_week, GETDATE()) AS DatePart_Output,
    DATENAME(iso_week, GETDATE()) AS DateName_Output, 
    DATETRUNC(iso_week, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'ISOWK', 
    DATEPART(isowk, GETDATE()) AS DatePart_Output,
    DATENAME(isowk, GETDATE()) AS DateName_Output, 
    DATETRUNC(isowk, GETDATE()) AS DateTrunc_Output
UNION ALL
SELECT 
    'ISOWW', 
    DATEPART(isoww, GETDATE()) AS DatePart_Output,
    DATENAME(isoww, GETDATE()) AS DateName_Output, 
    DATETRUNC(isoww, GETDATE()) AS DateTrunc_Output;

