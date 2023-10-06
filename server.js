const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");

//MySQL Connection

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Pa55!',
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