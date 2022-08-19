const Employee = require('./Employee')

// extend Employee class properties/methods and add new ones
class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
    }
    // override 'employee' to 'manager'
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager