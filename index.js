const inquirer = require('inquirer');
const mysql = require('mysql'); 
const cTable = require('console.table');
const connection = require('./db/ConnectionCMS.js');
const {getAllEmployees, addEmployee } = require('./controller functions/employeeControl.js');
const {getAllRoles, addRole } = require('./controller functions/roleControl.js');
const {getAllDepts, addDepartment} = require('./controller functions/departmentControl.js');
const endSession = require('./controller functions/endSession.js');



function beginCMS () {
    console.log ('You are using the employee management system.')
    firstQuestion();
}

beginCMS(); 

function firstQuestion () {
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
                name: 'View Departments',
                value:'VIEW_DEPARTMENTS'
            },
            {
                name: 'Add employee',
                value: 'ADD_EMPLOYEE'
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
    }]).then (({initialQuestion}) => {
        if (initialQuestion === 'VIEW_EMPLOYEES') {
            getAllEmployees();
        } else if (initialQuestion === 'VIEW_ROLES') {
            getAllRoles();
        } else if (initialQuestion === 'ADD_EMPLOYEE') {
            addEmployee();
        } else if (initialQuestion === 'ADD_ROLE') {
            addRole ();
        } else if (initialQuestion === 'ADD_DEPARTMENT') {
            addDepartment(); 
        } else if (initialQuestion === 'VIEW_DEPARTMENTS') {
            getAllDepts();
        }
    })
}

module.exports = firstQuestion 



