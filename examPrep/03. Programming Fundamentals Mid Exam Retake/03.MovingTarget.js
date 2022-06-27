function movingTarget(array) {
  let targetSequence = array.shift().split(" ").map(Number);
  for (let command of array) {
    if (command !== "End") {
      command = command.split(" ");
      let currCommand = command.shift();
      let currIndex = Number(command.shift());
      let currValue = Number(command.shift());
      switch (currCommand) {
        case "Shoot":
          if (currIndex < 0 || currIndex > targetSequence.length - 1) {
            continue;
          } else {
            if (targetSequence[currIndex] - currValue <= 0) {
              targetSequence.splice(currIndex, 1);
            } else {
              targetSequence[currIndex] -= currValue;
            }
          }
          break;
        case "Add":
          if (currIndex < 0 || currIndex > targetSequence.length - 1) {
            console.log("Invalid placement!");
            continue;
          } else {
            targetSequence.splice(currIndex, 0, currValue);
          }
          break;
        case "Strike":
          if (
            currIndex < 0 ||
            currIndex > targetSequence.length - 1 ||
            currIndex - currValue < 0 ||
            currIndex + currValue > targetSequence.length - 1
          ) {
            console.log("Strike missed!");
            continue;
          } else {
            let radius = currValue * 2 + 1;
            targetSequence.splice(currIndex - currValue, radius);
          }
          break;
      }
    } else {
      console.log(targetSequence.join("|"));
    }
  }
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 1 1", "End"]);
