const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');

const addRole = (roleTitle, roleSalary, roleDeptId) => {
    const querystring = `INSERT INTO role (title, salary, department_id) VALUES ('${roleTitle}', '${roleSalary}', '${roleDeptId}');`
    dbconnect.query(querystring, err => {
        if(err) {throw err}
        console.log ('New role added!')
    })
}

addRole ('Manager', 80000, 1);
