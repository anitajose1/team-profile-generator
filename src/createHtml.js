// Rendering of HTML Page

// create manager card
const managerCard = function (manager) {
    return `
    <div class="">
        <div class="card-item">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.number}</p>
            </div>

        </div>
    </div>
    `
}

// create engineer card
const engineerCard = function (engineer) {
    return `
    <div class="">
        <div class="card-item">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create intern card
const internCard = function (intern) {
    return `
    <div class="">
        <div class="card-item">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}

// puh array to page
createHtml = (data) => {
    
    // cards array
    pageArray = []
    
    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole()

        // call manager function
        if (role === 'Manager') {
            const managerItem = managerCard(employee)
            pageArray.push(managerItem)
        }

        // call engineer function
        if(role === 'Engineer') {
            const engineerItem = engineerCard(employee)
            pageArray.push(engineerItem)
        }

        // call intern function
        if (role === 'Intern') {
            const internItem = internCard(employee)
            pageArray.push(internItem)   
        }
    }

    // join strings
    const employeeCards = pageArray.join('')
    // return to generated page
    const generateTeam = generateProfilePage(employeeCards)
    return generateTeam
}

// generate html page
const generateProfilePage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8>
        <meta name="viewport content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>

        <header>
            <nav class="header">
                <h1 class="header-title">Team Profile</h1>
            </nav>
        </header>

        <main class="main-body">
            <div class="cards-container">
                <div class="cards-container2>
                    <!-- Team Profile Cards -->
                    ${employeeCards}
                </div>
            </div>
        </main>

    </body>
    </html>
    `
}

module.exports = createHtml