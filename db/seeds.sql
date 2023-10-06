
INSERT INTO department (dep_name)
VALUES
('Executive Board'),
('Finance'),
('Human Resources'),
('Sales and Marketing'),
('Engineering'),
('Research and Development'),
('Legal'),
('Customer Service');


INSERT INTO role (title, salary, department_id)
VALUES
('Chief Executive Officer', 552101.00, 1),
('Chief Financial Officer', 278145.00, 2),
('Chief Human Resources Officer', 148961.00 , 3),
('Chief Sales Officer', 81075.00 , 4),
('Director of Engineering', 209266.00 , 5),
('Chief Research and Development Officer', 90747.00, 6),
('General Counsel', 261262.00, 7),
('Chief Customer Officer', 157143.00, 8);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Marion', 'Guadalupe', 1, 1),
('Jordan', 'Burtin', 2, 2),
('Lowen', 'Sutherland', 3, 3),
('Noah', 'Dyer', 4, 4),
('Parker', 'Hull', 5, 5),
('Sage', 'Olsen', 6, 6),
('Robin', 'Monroe', 7, 7),
('Jesse', 'Hudson', 8, 8);
