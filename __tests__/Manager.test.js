const Manager = require('../lib/Manager')

// create test suite containing tests
describe("manager tests suite", () => {
    const manager = new Manager("Sarah", 218, "sarah.george@gmail.com");
  
    // get name from getName()
    test("gets employee name", () => {
      expect(manager.getName()).toEqual("Sarah");
      expect(manager.getName()).not.toEqual("abcd");
    });
  
    // get id from getId()
    test("gets employee id", () => {
      expect(manager.getId()).toEqual(218);
      expect(manager.getId()).not.toEqual(123);
    });
  
    // get email from getEmail()
    test("gets employee email", () => {
      expect(manager.getEmail()).toEqual("sarah.george@gmail.com");
    });

    test('creates an intern object', () => {
        expect(manager.officeNumber).toEqual(manager.officeNumber)
    })
  
    // get role from getRole()
    test("gets employee's role", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
