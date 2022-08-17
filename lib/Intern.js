const Employee = require('./Employee')

// extend Employee class properties/methods and add new ones
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    // return school from input
    getSchool() {
        return this.school
    }
    // override 'employee' to 'intern'
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern