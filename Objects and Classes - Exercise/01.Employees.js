function employees(input) {
  let employees = {};
  for (let currEmp of input) {
    employees.name = currEmp;
    employees.number = currEmp.length;
    console.log(
      `Name: ${employees.name} -- Personal Number: ${employees.number}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
