DROP DATABASE IF EXISTS employeeCMS_db;

CREATE DATABASE employeeCMS_db;
USE employeeCMS_db;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR (30) NOT NULL,
salary DECIMAL (7, 2) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (manager_id) REFERENCES employee (id)
);

ALTER TABLE employee
MODIFY COLUMN manager_id INT NULL;