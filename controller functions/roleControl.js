const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');
const endSession = require('./endSession.js'); 
const inquirer = require('inquirer');


const addRole = (roleTitle, roleSalary, roleDeptId) => {
    dbconnect.query ('SELECT * FROM department', function (err, res) {
        if (err) throw err; 
    })
    const querystring = `INSERT INTO role (title, salary, department_id) VALUES ('${roleTitle}', '${roleSalary}', '${roleDeptId}');`
    dbconnect.query(querystring, err => {
        if(err) {throw err}
        console.log ('New role added!')
    })  
        inquirer.prompt ([
            {
                name: 'roleTitle',
                type: 'input',
                message: 'What is the title?'
            },
            {
                name: 'roleSalary',
                type: 'input',
                message: ' What is the salary?'
            },
            {
                name: 'roleDeptId',
                type: 'input',
                message: 'What is the role ID?'
            }
        ])
}

const getAllRoles = () => {
    dbconnect.query ('SELECT * FROM role;', (err, rows) => {
        if (err) {throw err}
        console.table(rows)
        endSession();
    })
}

module.exports = {addRole, getAllRoles}