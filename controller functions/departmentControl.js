const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');
const concludeContinue = require('./endSession.js');

const addDepartment = (deptName) => {
    const querystring = `INSERT INTO department (name) VALUES ('${deptName}');`
    dbconnect.query(querystring, err => {
        if(err) {throw err}
        console.log ('New department added!')
    })
}

const getAllDepts = () => {
    dbconnect.query ('SELECT * FROM department;', (err, rows) => {
        if (err) {throw err}
        console.table(rows)
        concludeContinue();
    })
}

module.exports = {addDepartment, getAllDepts}