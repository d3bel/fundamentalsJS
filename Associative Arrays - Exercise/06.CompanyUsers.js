function companyUsers(array) {
  let companyEmps = new Map();
  array.forEach((user) => {
    let userInfo = user.split(" -> ");
    let companyName = userInfo[0];
    let employeeID = userInfo[1];
    if (!companyEmps.has(companyName)) {
      companyEmps.set(companyName, new Set());
    }
    companyEmps.get(companyName).add(employeeID);
  });
  let sortEmps = Array.from(companyEmps).sort(
    ([compNameA, empIDA], [compNameB, empIDB]) => {
      return compNameA.localeCompare(compNameB);
    }
  );
  for (let [compName, empID] of sortEmps) {
    console.log(compName);
    for (let id of empID) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("-----------------------");
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
