const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Sarah', 'sarah.george@gmail.com', 218)

    expect(intern.school).toEqual(expect.any(String))
})

// get school from getSchool()
test("gets intern's school", () => {
    const intern = new Intern('Sarah', 'sarah.george@gmail.com', 218)

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})

// get role from getRole()
test("gets employee's role", () => {
    const intern = new Intern('Sarah', 'sarah.george@gmail.com', 218)

    expect(intern.getRole()).toEqual('Intern')
})