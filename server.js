const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");
const fs = require('fs');
require("dotenv").config();

//MySQL Connection

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },
);

db.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
    }else{
        console.log('Connected to employees_db.')
    }
});

const sqlQueries = fs.readFileSync('./db/query.sql', 'utf8');

// Function to execute SQL queries
async function executeQueries(queries) {
  const connection = await pool.getConnection();
  try {
    const results = await connection.query(queries);
    console.log('Queries executed successfully:', results[0]);
  } catch (error) {
    console.error('Error executing queries:', error);
  } finally {
    connection.release();
  }
}

// Function to add a department


function allDepartments() {
    const query = 'SELECT * FROM department';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
}

function allRoles() {
    const query = 'SELECT * FROM role';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
}

function allEmployees() {
    const query = 'SELECT * FROM employee';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
    });
}

async function addDepartment() {
    const newDepartment = await inquirer.prompt({
        name: 'dep_name',
        type: 'input',
        message: 'What is your new department called?',
      });
 
      db.query('INSERT INTO department (dep_name) VALUES (?)', [newDepartment.dep_name], (err) => {
        if (err) throw err;
        console.log('Department added!');
        mainMenu();
      });
}

async function addRole() {
    const newRole = await inquirer.prompt([
        {
          name: 'title',
          type: 'input',
          message: 'What is the title of the role?',
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary of the role?',
        },
        {
          name: 'department_id',
          type: 'input',
          message: 'What is the department id this role belongs to?',
        }
      ]);
    
      db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [newRole.title, newRole. salary, newRole.department_id], (err) => {
        if (err) throw err;
        console.log('New role added!');
        mainMenu();
      });

}

async function addEmployee() {
    const newEmployee = await inquirer.prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'What your employee\'s first name?',
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'What is your employee\'s last name?',
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'What is the role\'s id?',
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'What is this employee\'s manager\'s id?',
        }
      ]);
    
      db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', 
      [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id], (err) => {
        if (err) throw err;
        console.log('New Employee added!');
        mainMenu();
      });
    
}

async function updateRole() {
    const updateEmployee = await inquirer.prompt([
        {
          name: 'employee_id',
          type: 'input',
          message: 'Please enter the ID of the employee you want to update?',
        },
        {
          name: 'new_role_id',
          type: 'input',
          message: 'Please enter the ID of the new role?',
        }
      ]);
    
      db.query('UPDATE employee SET role_id = ? WHERE id = ?', 
      [updateEmployee.new_role_id, updateEmployee.employee_id], 
      (err, result) => {
        if (err) {
        console.error('Error updating role:', err);
        } else if (result.affectedRows === 0) {
        console.log('No employee found with that ID.');
        } else {
        console.log('Role updated successfully!');
        }
        mainMenu();
    });
}


const mainMenu = () => {
    inquirer
    .prompt({
        name: 'menu',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'view all departments', 
            'view all roles', 
            'view all employees',
            'add a department', 
            'add a role',
            'add an employee',
            'update an employee role',
            'exit'
        ],
    })

    .then((answer) => {
        switch (answer.menu) {
            case 'view all departments':
                allDepartments();
                break;
            case 'view all roles':
                allRoles();
                break;
            case 'view all employees':
                allEmployees();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee': 
                addEmployee();
                break;
            case 'update an employee role':
                updateRole();
                break;
            case
            'exit':
                db.end();
                console.log('exiting employees_db');
                break;
        }
    });
}

function start() {
    mainMenu();
}

      
start();