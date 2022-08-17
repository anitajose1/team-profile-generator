const Employee = require('./Employee')

// extend Employee class properties/methods and add new ones
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer