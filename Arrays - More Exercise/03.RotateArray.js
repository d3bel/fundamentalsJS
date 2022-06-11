function rotateArray(array) {
  let rotationLvl = array.pop();
  let newArr = array;
  for (let i = 0; i < rotationLvl; i++) {
    let currIndex = newArr.pop();
    newArr.unshift(currIndex);
  }
  console.log(newArr.join(" "));
}
// rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
