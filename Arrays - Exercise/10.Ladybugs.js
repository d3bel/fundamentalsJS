function ladybugs(array) {
  let fieldSize = Number(array[0]);
  let ladybugsPosition = array[1].split(" ");
  let ladyBug = [];
  for (let i = 0; i < fieldSize; i++) {
    ladyBug.push(0);
  }
  for (let index = 0; index < fieldSize; index++) {
    let currPositionOfBugsIndex = ladybugsPosition[index];
    if (currPositionOfBugsIndex >= 0 && currPositionOfBugsIndex < fieldSize) {
      ladyBug[currPositionOfBugsIndex] = 1;
    }
  }
  for (let i = 2; i < array.length; i++) {
    let [ladybugIndex, direction, jumpLength] = array[i].split(" ");
    ladybugIndex = Number(ladybugIndex);
    jumpLength = Number(jumpLength);
    if (
      ladyBug[ladybugIndex] !== 1 ||
      ladybugIndex < 0 ||
      ladybugIndex >= ladyBug.length
    ) {
      continue;
    }
    if (jumpLength < 0) {
      jumpLength = Math.abs(jumpLength);
      if (direction === "right") {
        direction = "left";
      } else if (direction === "left") {
        direction = "right";
      }
    }
    ladyBug[ladybugIndex] = 0;
    if (direction === "right") {
      ladybugIndex = Number(ladybugIndex);
      let newPosition = ladybugIndex + jumpLength;
      if (ladyBug[newPosition] === 1) {
        newPosition = newPosition + jumpLength;
      }
      if (newPosition < ladyBug.length) {
        ladyBug[newPosition] = 1;
      }
    } else {
      let newPosition = ladybugIndex - jumpLength;
      if (ladyBug[newPosition] === 1) {
        newPosition = newPosition - jumpLength;
      }
      if (newPosition >= 0) {
        ladyBug[newPosition] = 1;
      }
    }
  }
  console.log(ladyBug.join(" "));
}

//   let workArr = array;
//   let str = workArr.toString();
//   let newArr = str.split(",");
//   let fieldSize = newArr.shift();
//   fieldSize = Number(fieldSize)
//   let occupiedPositions = newArr.shift();
//   let ladyBug = [];
//   occupiedPositions = occupiedPositions.split(" ").map(Number);
//   console.log(occupiedPositions)
//   for (let i = 0; i < fieldSize; i++) {
//       ladyBug.push(0)
//     }

//     for (let j = 0; j < newArr.length; j++) {
//     let currArr = newArr[j];
//     currArr = currArr.toString().split(" ");

//     }
//   console.log(ladyBug);

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);
