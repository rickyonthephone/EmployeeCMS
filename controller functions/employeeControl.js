const dbconnect = require("../db/ConnectionCMS.js");
const cTable = require("console.table");
const connection = require("../db/ConnectionCMS.js");
const inquirer = require("inquirer");
const conclude = require('../index.js');


function addEmployee () {
  dbconnect.query("SELECT * FROM role", (err, res) => {
      if (err) throw err; 
      inquirer.prompt([
          {
              name: 'first_name',
              type: 'input',
              message: "What is the employee's first name?"
          },
          {
              name: 'last_name',
              type: 'input',
              message: "What is the employee's last name?"
          },
          {
              name: 'manager_id',
              type: 'input',
              message: "What is the employee's manager ID?"
          },
          {
              name: 'role',
              type: 'list',
              choices: function () {
                  let roleArray = [];
                  for (let i = 0; i < res.length; i++) {
                      roleArray.push(res[i].title);
                  }
                  return roleArray
                },
                message: 'What is the employees role?'
              }
            ]).then (function (answer) {
                let role_id;
                for (let e = 0; e < res.length; e++) {
                    if (res[e].title == answer.role) {
                        role_id = res[e].id;
                        console.log(role_id);
                    }
                }
                connection.query (
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        manager_id: answer.manager_id,
                        role_id: role_id
                    },
                    function (err) {
                        if (err) throw err;
                        console.log ("Your new employee has been added!")
                        conclude();
                    })
            })
          })
    };
    
  
const getAllEmployees = async () => {
  dbconnect.query("SELECT * FROM employee;", (err, rows) => {
    if (err) {
      throw err;
    }
    console.table(rows);
    conclude();
  });
};

// const updateEmployee = () => {
//   const querystring = "SELECT * from employee";
//   dbconnect.query(querystring, err);
// };

module.exports = {addEmployee, getAllEmployees}
