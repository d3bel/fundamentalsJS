function arrayModifie(array) {
  let newArray = array.shift().split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    let currentArr = array[i].split(" ");
    let currCommand = currentArr[0];

    switch (currCommand) {
      case "swap":
        let firstIndex = Number(currentArr[1]);
        let secondIndex = Number(currentArr[2]);
        let temp = newArray[firstIndex];
        newArray[firstIndex] = newArray[secondIndex];
        newArray[secondIndex] = temp;
        break;
      case "multiply":
        let firstNumToMultiply = Number(currentArr[1]);
        let secondNumToMultiply = Number(currentArr[2]);
        let sum = newArray[firstNumToMultiply] * newArray[secondNumToMultiply];
        newArray.splice(firstNumToMultiply, 1, `${sum}`);
        break;
      case "decrease":
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] -= 1;
        }
        break;
      case "end":
        return newArray.join(", ");
    }
  }
}
console.log(
  arrayModifie([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
  ])
);
console.log(
  arrayModifie([
    "1 2 3 4",
    "swap 0 1",
    "swap 1 2",
    "swap 2 3",
    "multiply 1 2",
    "decrease",
    "end",
  ])
);
