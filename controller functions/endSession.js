const dbconnect = require("../db/ConnectionCMS.js");
const cTable = require("console.table");
const connection = require("../db/ConnectionCMS.js");
const inquirer = require("inquirer");
const {beginCMS, firstQuestion} = require('../index.js')

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
      .then(async ({conclude}) => {
        if (conclude.conclude === "False") {
          beginCMS();
        } else {
          console.log("Thank you, goodbye!");
          process.exit();
        }
      });
  };

  module.exports = endSession;