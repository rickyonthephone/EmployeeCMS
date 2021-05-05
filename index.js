const inquirer = require('inquirer');
const mysql = require('mysql'); 
const cTable = require('console.table');
const connection = require('./db/connection.js');
const {getAllEmployees, addEmployee } = require('./controller functions/employeeControl.js');

connection.connect (function(err) {
    if (err) throw err; 
    console.log ('You are now connected!');
    firstQuestion();
});

firstQuestion = () => {
    inquirer.prompt ([{
        type: 'list',
        name: 'initialQuestion',
        message:'What would you like to do?',
        choices: [
            {
                name: 'View Employees',
                value: 'VIEW_EMPLOYEES'
            },
            {
                name: 'View Roles',
                value: 'VIEW_ROLES'
            },
            {
                name: 'Add employee',
                value: "ADD_EMPLOYEE"
            },
            {
                name: 'Update employee',
                value: 'UPDATE_EMPLOYEE'
            },
            {
                name: 'Add Role',
                value: 'ADD_ROLE'
            },
            {
                name: 'Add Department',
                value: 'ADD_DEPARTMENT'
            }
        ]
    }]).then ({initialQuestion}) => {
        if (initialQuestion === 'VIEW_EMPLOYEES') {
            getAllEmployees();
        } else if (initialQuestion === 'VIEW_ROLES') {
            getAllRoles();
        } else if (initialQuestion === 'ADD_EMPLOYEE') {
            addEmployee();
        } else if (initialQuestion === 'ADD_ROLE') {
            addRole ();
        } else if (initialQuerstion === 'ADD_DEPARTMENT') {
            addDepartment(); 
        }
        }
    }




