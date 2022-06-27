function softUniReception(array) {
  let newArray = array.map(Number).slice();
  let employeeHelpPerHour = 0;
  let studentNeedsHelp = newArray[3];
  let time = 0;
  for (let i = 0; i < 3; i++) {
    employeeHelpPerHour += newArray[i];
  }
  while (studentNeedsHelp > 0) {
    time++;
    if (time % 4 === 0) {
      continue;
    } else {
      studentNeedsHelp -= employeeHelpPerHour;
    }
  }
  return `Time needed: ${time}h.`;
}
// console.log(softUniReception(["5", "6", "4", "20"]));
console.log(softUniReception(["1", "2", "3", "45"]));
console.log(softUniReception(["3", "2", "5", "80"]));
console.log(softUniReception(["3", "2", "5", "40"]));
