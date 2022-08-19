const Employee = require("../lib/Employee");

// create test suite containing tests
describe("employee tests suite", () => {
  const employee = new Employee("Sarah", 218, "sarah.george@gmail.com");

  // get name from getName()
  test("gets employee name", () => {
    expect(employee.getName()).toEqual("Sarah");
    expect(employee.getName()).not.toEqual("abcd");
  });

  // get id from getId()
  test("gets employee id", () => {
    expect(employee.getId()).toEqual(218);
    expect(employee.getId()).not.toEqual(123);
  });

  // get email from getEmail()
  test("gets employee email", () => {
    expect(employee.getEmail()).toEqual("sarah.george@gmail.com");
  });

  // get role from getRole()
  test("gets employee's role", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
