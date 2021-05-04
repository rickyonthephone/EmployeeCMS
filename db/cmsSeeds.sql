USE employeeCMS_db;

INSERT INTO department
(name)
VALUES
('Sales'),
('Legal'),
('Technology'),
('Finance'),
('R & D'),
('Executive'); 

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES

 ('Richard', 'Crippen', 1, NULL),
 ('Ayla', 'Shockley', 2, NULL),
 ('Dash', 'Alexander', 3, 1), 
 ('Jack', 'Taylor', 4, 2),
 ('Katie', 'Crippen', 5, 1),
 ('David', 'Baker', 6, 2),
 ('Suzanne', 'Hendricks', 7, NULL),
 ('Andy', 'Pond', 8, 1),
 ('Ray', 'Borkman', 9, 1),
 ('Donna', 'Reed', 10, 2),
 ('Dan', 'Reed', 11, 2);

 INSERT INTO role 
 (title, salary, department_id)
 VALUES
 ('President', 99000, 6),
 ('Sales Manager', 95000, 1),
 ('Salesperson', 80000, 1),
 ('Legal Aid', 50000, 2),
 ('Head Counsel', 90000, 2),
 ('Lead Architect', 90000, 3),
 ('Developer', 85000, 3),
 ('CPA', 80000, 4),
 ('Accountant', 70000, 4),
 ('Head of Research', 95000, 5),
 ('Research Assistant', 75000, 5)
 ;