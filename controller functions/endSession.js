const inquirer = require("inquirer")
const dbconnect = require("../db/ConnectionCMS")
const restart = require('../index.js');

const endSession = (yesNo) => {
    inquirer.prompt ([{
        type: 'list',
        message: 'Would you like to end your session?',
        name: 'conclude',
        choices: [{
            name: 'Yes',
            value: 'true'
        },
        {
            name: 'No',
            value: 'False'
        }
    ]
    }]).then ((answer) => {
        if (answer.continue === 'false') {
            restart();
        } else {
            console.log ('Thank you, goodbye!');
            process.exit();
        }
    })
}

module.exports = endSession