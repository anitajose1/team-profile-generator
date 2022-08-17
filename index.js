const inquirer = require("inquirer")
const fs = require("fs")

// Array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your name!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Employee ID? (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true
            } else {
                console.log('Please enter your Employee ID!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: email => {
            if (email) {
                return true
            } else {
                console.log('Please enter your email address!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is your office number? (Required)',
        validate: number => {
            if (number) {
                return true
            } else {
                console.log('Please enter your office number!');
                return false
            }
        }
    },
]

// function to initialize app
function init() {
    inquirer.prompt (managerQuestions)
    // .then(data => {
    //     writeToFile('./lib/Manager', data)
    // })
}

// Function call to initialize app
init();

module.exports = managerQuestions