const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    // const employee = new Employee('Sarah', 'sarah.george@gmail.com', 218)

    // expect(employee.name).toEqual(expect.any(String))
    // expect(employee.email).toEqual(expect.any(String))
    // expect(employee.id).toEqual(expect.any(Number))

    const employee = new Employee()

    expect(typeof(employee)).toBe('object')
})

// get name from getName()
test('gets employee name', () => {
    const employee = new Employee('Sarah', 'sarah.george@gmail.com', 218)

    expect(employee.getName()).toEqual(expect.any(String))
})

// get email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Sarah', 'sarah.george@gmail.com', 218)

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

// get id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Sarah', 'sarah.george@gmail.com', 218)

    expect(employee.getId()).toEqual(expect.any(Number))
})

// get role from getRole()
test("gets employee's role", () => {
    const employee = new Employee('Sarah', 'sarah.george@gmail.com', 218)

    expect(employee.getRole()).toEqual('Employee')
})