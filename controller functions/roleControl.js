const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');


const addRole = (roleTitle, roleSalary, roleDeptId) => {
    const querystring = `INSERT INTO role (title, salary, department_id) VALUES ('${roleTitle}', '${roleSalary}', '${roleDeptId}');`
    dbconnect.query(querystring, err => {
        if(err) {throw err}
        console.log ('New role added!')
    })
}

const getAllRoles = () => {
    dbconnect.query ('SELECT * FROM role;', (err, rows) => {
        if (err) {throw err}
        console.table(rows)

    })
}

module.exports = {addRole, getAllRoles}