const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const createHtml = require('./src/createHtml')

// array for team
const employeesArr = []

// questions for manager data
const managerInfo = () => {
    return inquirer
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
            message: "Enter the manager's employee ID.",
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
            message: "Enter the manager's email address.",
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
            name: 'officeNumber',
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
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput
        const manager = new Manager (name, id, email, officeNumber)

        // push to team array
        employeesArr.push(manager)
        console.log(manager);
        return manager
    })
}

// questions for employee data
const employeeInfo = () => {
    console.log(`
    ==========================
    Adding members to the team
    ==========================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select your employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the employee's name!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the employee's's ID!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address.",
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
            name: 'github',
            message: "Enter the employee's GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: githubName => {
                if (githubName) {
                    return true
                } else {
                    console.log("Please enter the employee's GitHub username!");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: schoolName => {
                if (schoolName) {
                    return true
                } else {
                    console.log("Please enter the intern's school!");
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Do you want to add more team members?",
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, github, school, confirmAddEmployee} = employeeData
        let employee

        // data for engineer
        if (employeeData.role === 'Engineer') {
            employee = new Engineer(name, id, email, github)
            console.log(employee);
        }
        // data for intern
        else if (employeeData.role === 'Intern') {
            employee = new Intern(name, id, email, school)
            console.log(employee);
        } 

        employeesArr.push(employee)

        if (confirmAddEmployee) {
            return employeeInfo(employeesArr)
        } else {
            return employeesArr
        }
    })
}

// generate html page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err =>{
        if (err) {
            console.log(err);
            return
        } else {
            console.log("Your team profile is created!");
        }
    })
}

managerInfo()
.then(employeeInfo)
.then(employeesArr => {
    return createHtml(employeesArr)
})
.then(pageHtml => {
    return writeFile(pageHtml)
})
.catch(err => {
    console.log(err);
})