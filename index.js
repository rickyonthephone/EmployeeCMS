const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const connection = require("./db/ConnectionCMS.js");
const {getAllEmployees, addEmployee} = require("./controller functions/employeeControl.js");
const {getAllRoles, addRole} = require("./controller functions/roleControl.js");
const {getAllDepts,addDepartment} = require("./controller functions/departmentControl.js");

function beginCMS() {
  console.log("You are using the employee management system.");
  firstQuestion();
}

const firstQuestion = () => {
  inquirer
    .prompt({
      type: "list",
      name: "initialQuestion",
      message: "What would you like to do?",
      choices: [
        {
          name: "View Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update employee",
          value: "UPDATE_EMPLOYEE",
        },
        {
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
      ],
    })
    .then(async ({ initialQuestion }) => {
      if (initialQuestion === "VIEW_EMPLOYEES") {
       getAllEmployees();
        

        endSession();
      } else if (initialQuestion === "VIEW_ROLES") {
        getAllRoles();
      } else if (initialQuestion === "ADD_EMPLOYEE") {
        addEmployee();
      } else if (initialQuestion === "ADD_ROLE") {
        addRole();
      } else if (initialQuestion === "ADD_DEPARTMENT") {
        addDepartment();
      } else if (initialQuestion === "VIEW_DEPARTMENTS") {
        getAllDepts();
      }
    });
};
const endSession = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to end your session?",
        name: "conclude",
        choices: [
          {
            name: "Yes",
            value: "true",
          },
          {
            name: "No",
            value: "False",
          },
        ],
      },
    ])
    .then((conclude) => {
      if (conclude.conclude === "False") {
        beginCMS();
      } else {
        console.log("Thank you, goodbye!");
        process.exit();
      }
    });
};
beginCMS();

module.exports = endSession; 
