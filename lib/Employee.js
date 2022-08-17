// create Employee parent class with properties & methods
class Employee  {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // return name, id, and email from input
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    // return employee's role
    getRole() {
        return "Employee"
    }
}

module.exports = Employee