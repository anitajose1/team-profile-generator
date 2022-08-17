const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// array for team
const employeesArr = []

// questions for manager input
function managerInfo() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager of this team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID.',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the manager's ID!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true
                } else {
                    console.log("Please enter a valid email address!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: "Enter the manager's office number.",
            validate: numberInput => {
                if (isNaN(numberInput)) {
                    console.log("Please enter an office number!")
                    return false
                } else {
                    return true
                }
            }
        }
    ])
    .then(managerInfo => {
        const {name, id, email, number} = managerInfo
        const manager = new Manager (name, id, email, number)

        // push to team array
        employeesArr.push(manager)
        console.log(manager);
    })
}

managerInfo()