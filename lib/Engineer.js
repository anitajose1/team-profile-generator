const Employee = require('./Employee')

// extend Employee class properties/methods and add new ones
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    // return github from input
    getGithub() {
        return this.github
    }
    // override 'employee' to 'engineer'
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer