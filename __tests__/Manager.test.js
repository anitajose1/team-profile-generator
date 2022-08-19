const Manager = require('../lib/Manager')

test('creates an intern object', () => {
    // const manager = new Manager('Sarah', 'sarah.george@gmail.com', 218)

    // expect(manager.number).toEqual(expect.any(Number))

    const manager = new Manager()

    expect(typeof(manager)).toBe('object')
})

// get role from getRole()
test("gets employee's role", () => {
    const manager = new Manager('Sarah', 'sarah.george@gmail.com', 218)

    expect(manager.getRole()).toEqual('Manager')
})