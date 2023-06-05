DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    roles_title VARCHAR(30) NOT NULL,
    department_name VARCHAR (30) NOT NULL,
    roles_salary INT, 
    manager_id INT,
    manager_first_name VARCHAR(30),
    manager_last_name VARCHAR(30),
    FOREIGN KEY (department_name) REFERENCES department(id)
);