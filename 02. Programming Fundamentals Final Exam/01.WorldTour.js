function worldTour(input) {
  let genuineString = input.shift();
  while (input[0] != "Travel") {
    let currentCommand = input.shift();
    let [command, firstInput, secondInput] = currentCommand.split(":");
    if (command === "Add Stop") {
      firstInput = Number(firstInput);
      if (firstInput >= 0 && firstInput <= genuineString.length - 1) {
        genuineString = addDist(genuineString, firstInput, secondInput);
      }
    } else if (command === "Remove Stop") {
      firstInput = Number(firstInput);
      secondInput = Number(secondInput);
      if (
        firstInput >= 0 &&
        firstInput <= genuineString.length - 1 &&
        secondInput >= 0 &&
        secondInput <= genuineString.length - 1
      ) {
        genuineString = removeDist(genuineString, firstInput, secondInput + 1);
      }
    } else if (command === "Switch") {
      if (genuineString.includes(firstInput)) {
        genuineString = switchDist(genuineString, firstInput, secondInput);
    }
}
console.log(genuineString);
  }
  console.log(`Ready for world tour! Planned stops: ${genuineString}`);

  function addDist(string, input1, input2) {
    return (string =
      string.substring(0, input1) + input2 + string.substring(input1));
  }
  function removeDist(string, input1, input2) {
    return (string = string.slice(0, input1) + string.substring(input2));
  }
  function switchDist(string, input1, input2) {
    return (string = string.split(input1).join(input2));
  }
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
