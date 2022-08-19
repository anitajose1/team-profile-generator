const Engineer = require('../lib/Engineer')

// create test suite containing tests
describe("engineer tests suite", () => {
    const engineer = new Engineer("Sarah", 218, "sarah.george@gmail.com");
  
    // get name from getName()
    test("gets engineer's name", () => {
      expect(engineer.getName()).toEqual("Sarah");
      expect(engineer.getName()).not.toEqual("abcd");
    });
  
    // get id from getId()
    test("gets engineer's id", () => {
      expect(engineer.getId()).toEqual(218);
      expect(engineer.getId()).not.toEqual(123);
    });
  
    // get email from getEmail()
    test("gets engineer's email", () => {
      expect(engineer.getEmail()).toEqual("sarah.george@gmail.com");
    });

    // get github from getGithub()
    test("gets engineer's github username", () => {
    expect(engineer.getGithub()).toBe(engineer.github)
})
  
    // get role from getRole()
    test("gets employee's role", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });