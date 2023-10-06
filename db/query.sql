
-- USE employees_db;

-- SELECT * FROM department;

-- SELECT role.id, role.title, role.salary, department.dep_name AS department
-- FROM role
-- INNER JOIN department ON role.department_id = department.id;

-- SELECT employee.id, employee.first_name, employee.last_name,
--        role.title AS job_title, department.dep_name AS department,
--        role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager
-- FROM employee
-- LEFT JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department_id = department.id
-- LEFT JOIN employee AS manager ON employee.manager_id = manager.id;

