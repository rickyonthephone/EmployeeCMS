const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');
const connection = require('../db/ConnectionCMS.js');

const addEmployee = (employeeFirst, employeeLast, employeeRoleId, employeeManagerId = null) => {
    const querystring = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeFirst}', '${employeeLast}', ${employeeRoleId}, ${employeeManagerId});`
    dbconnect.query(querystring, err => {
        if(err) {throw err}
        console.log ('New employee added!')
    })
}

const getAllEmployees = () => {
    dbconnect.query ('SELECT * FROM employee;', (err, rows) => {
        if (err) {throw err}
        console.table(rows)
    })
}

const updateEmployee = () => {
    const querystring = 'SELECT * from employee'
    dbconnect.query (querystring, err )
}

module.exports = {addEmployee, getAllEmployees}