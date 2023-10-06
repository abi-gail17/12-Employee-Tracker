-- deletes employees_bd database if it already exists
DROP DATABASE IF EXISTS employees_db;

--creates employees_db database
CREATE DATABASE empolyees_bd;

USE employees_db;

--creates table for dapartments
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30)
);

--creates table for roles
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title title`: `VARCHAR(30),
    salary DECIMAL,
    department_id: INT
);

--creates table for employees
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);