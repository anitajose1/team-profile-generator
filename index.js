const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const employees = []

function init() {
    createHtml()
    memberInfo()
}

// questions for user input
function memberInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number.',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false
                }
            }
        }
    ])
}