const Employee = require('./Employee')

// extend Employee class properties/methods and add new ones
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager