const dbconnect = require('../db/ConnectionCMS.js');
const cTable = require('console.table');
const endSession = require('./endSession.js');
const inquirer = require('inquirer');


const addDepartment = () => {
    dbconnect.query('SELECT * FROM department', function (err, res) {
        if (err) throw err; 
        const department = res.map(element => {
            return element.id
        })
        inquirer.prompt ([
            {
                name: 'department',
                type: 'input',
                message: "What is the department?"
               }
        ])
        .then (function (answer) {
            dbconnect.query (`INSERT INTO department SET ? name`, answer, 
            function (err) {
                if(err) throw err; 
                console.log (`${answer.department} was added!`);
                endSession();
            })
        })}
    )}

const getAllDepts = () => {
    dbconnect.query ('SELECT * FROM department;', (err, rows) => {
        if (err) {throw err}
        console.table(rows)
        endSession();
    })
}

module.exports = {addDepartment, getAllDepts}