
-- Row level functions

-- String functions

-- CONCAT

-- Concatenate first name and last country into one column
SELECT
	first_name,
	country,
	CONCAT(first_name, '-', country) AS name_country
FROM customers;

-- UPPER & LOWER

-- Convert the first name to lowercase & uppercase

SELECT
	first_name,
	country,
	CONCAT(first_name, '-', country) AS name_country,
	LOWER(first_name) AS low_name,
	UPPER(first_name) AS up_name
FROM customers;

-- TRIM

-- Find customers whose first name contains leading or trailing spaces
SELECT
	first_name,
	LEN(first_name) AS len,
--LEN(TRIM(first_name)) AS  len_trim_name,
--LEN(first_name) - LEN(TRIM(first_name)) AS flag
FROM customers
-- WHERE LEN(first_name) != LEN(TRIM(first_name))
WHERE first_name != TRIM(first_name); -- Easiest to do


-- REPLACE

-- Remove dashes(-) from a phone number
SELECT
	'123-456-7890' AS phone,
	REPLACE('123-456-7890', '-', '') AS clean_phone;

-- Replace file extension from txt to csv
SELECT
'report.txt' AS old_filename,
REPLACE('report.txt', '.txt', '.csv') AS new_filename;

-- Calculation
-- LEN

-- Calculate length of each customer's first name
SELECT
	first_name,
	LEN(first_name) AS len
FROM customers;

-- String Extraction
-- LEFT - give sub-string from start
-- RIGHT- give sub-string from end

-- Retrive the first & last two characters of each first name
SELECT
	first_name,
	LEFT(first_name, 2) AS first_2_char,
  RIGHT(first_name, 2) AS last_2_char
FROM customers;

-- SUBSTRING

-- Retrive a list of customer's first names after removing the first characters 
SELECT
	first_name,
	-- SUBSTRING(TRIM(first_name), 2, 3) AS sub_name -- static count
	SUBSTRING(TRIM(first_name), 2, LEN(first_name)) AS sub_name -- dynamic count
FROM customers;

