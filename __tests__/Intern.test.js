const Intern = require('../lib/Intern')

// create test suite containing tests
describe("intern tests suite", () => {
    const intern = new Intern("Sarah", 218, "sarah.george@gmail.com");
  
    // get name from getName()
    test("gets intern's name", () => {
      expect(intern.getName()).toEqual("Sarah");
      expect(intern.getName()).not.toEqual("abcd");
    });
  
    // get id from getId()
    test("gets intern's id", () => {
      expect(intern.getId()).toEqual(218);
      expect(intern.getId()).not.toEqual(123);
    });
  
    // get email from getEmail()
    test("gets intern's email", () => {
      expect(intern.getEmail()).toEqual("sarah.george@gmail.com");
    });

    // get school from getSchool()
    test("gets intern's school", () => {
    expect(intern.getSchool()).toEqual(intern.school)
})
  
    // get role from getRole()
    test("gets employee's role", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });