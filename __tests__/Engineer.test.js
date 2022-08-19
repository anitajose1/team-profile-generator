const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    // const engineer = new Engineer('Sarah', 'sarah.george@gmail.com', 218)

    // expect(engineer.github).toEqual(expect.any(String))

    const engineer = new Engineer()

    expect(typeof(engineer)).toBe('object')
})

// get github from getGithub()
test("gets engineer's github username", () => {
    const engineer = new Engineer('Sarah', 'sarah.george@gmail.com', 218)

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})

// get role from getRole()
test("gets employee's role", () => {
    const engineer = new Engineer('Sarah', 'sarah.george@gmail.com', 218)

    expect(engineer.getRole()).toEqual('Engineer')
})
