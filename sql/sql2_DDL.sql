-- DDL (DATA DEFINATION LANGUAGE)

-- CREATE -> to create new instance
-- CREATE TABLE -> to create new table

-- Create a new table called persons with columns: id, person_name, birth_date, & phone

CREATE TABLE 
  persons (
    id INT NOT NULL,
    person_name VARCHAR(50) NOT NULL,
    birth_date DATE,
    phone VARCHAR(15) NOT NULL,

    CONSTRAINT pk_persons PRIMARY KEY (id)
)

-- ALTER -> to change the defination of table - like adding new column

-- Add a new colum called email to the persons table -> already existing table to alter
-- ADD - to add column after ALTER cmd

ALTER TABLE persons
ADD email VARCHAR(50) NOT NULL;

-- Remove the column phone from the persons table
-- DROP COLUMN - removes column  with data from it if there so be cautious

ALTER TABLE persons
DROP COLUMN phone;

-- DROP
-- to drop persons table
-- DROP TABLE - most simples but riskiest one -> remove table from db
DROP TABLE persons;