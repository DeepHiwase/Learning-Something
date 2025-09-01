-- DML (DATA MANIPULATE LANGUAGE)

-- INSERT -> to insert values in columns by rowwise

-- IMP Note: Match number of colums and values

-- You can insert multiple values in each columns with row wise specifing values

-- WAY 1 to INSERT -> MANUAL VALUES

INSERT INTO customers (id, first_name, country, score)
VALUES 
    (6, 'Anna', 'USA', NULL),
    (7, 'Sam', NULL, 100);

-- CAUTION: Columns & Values must be  in the same order
-- Matching Data types, Column count & constraints
-- TIP: Always list columns explicitly for clarity & maintainability
-- Note: Colms not included in INSERT  become NULL (unless  a default or constraint exists) -> can skip NULLable colms

-- WAY 2 to INSERT -> Copying values from one table to target table by sing SELECT and INSERT after it

-- Copy data from 'customers' to 'persons'

-- Step 1: First write query from src table 
-- NOTE: see each column that can match to target tables colums values datatype and do logically and presence of mind
-- write match columns like id, person_name can be match with first_name
-- those dont match -> put NULL to put all values NULL in target column -if datatype in target column is NOT NULL then put a static value like 'Unknown' 

-- SELECT
--   id,
--   first_name,
--   NULL,
--   'Unknown'
-- FROM customers;

-- now add INSERT to it like 
INSERT INTO persons (id, person_name, birth_date, phone)
SELECT
  id,
  first_name,
  NULL,
  'Unknown'
FROM customers;


-- UPDATE -> to update values of colums or rows
-- use SET to set values of columns 
-- NOTE: Always use WHERE to avoid updating all rows unintentionally
-- If not it will update all rows
-- Without WHERE all rows will be affected

-- Change the score of customer 6 to 0

UPDATE customers
SET score = 0
WHERE id = 6;

-- BEST PRACTICE -> Check with SELECT before UPDATE to avoid updating wrong data
/* 
SELECT
  *
FROM customers
WHERE id = 6;
 */

-- Change the score of customer with ID 7 to 0 and update  the country to 'UK'
UPDATE customers
SET
  score = 0,
  country = 'UK'
WHERE id = 7;

-- Update all customers with a NULL score by setting their score to 0
UPDATE customers
SET score = 0
WHERE score IS NULL;
/* 
SELECT
  *
FROM customers
WHERE score IS NULL;
 */


--  DELETE -> most import and risking cmd in DML
-- Note: Always use WHERE  to avoid deleting all rows of table unintentionally

-- Delete all customers with an ID greater than 5
-- BEST PRACTICE: (DOUBLE CHECK always) Always first SELECT what is comming to DELETE then DELETE

DELETE FROM customers
WHERE id > 5;
/* SELECT
  *
FROM customers
WHERE id > 5; */

-- Delete all data from table persons
-- Not delete whole table just delete its rows - table still exists
DELETE FROM persons;
-- But this take under the hood a lot time if larger data as check logs, permissions, protocols...or other things when deleting
-- Instead DELETE use TRUNCATE -> to delete all rows faster - but table still exists
-- TRUNCATE
TRUNCATE TABLE persons;