function nonDecreasingSubset(array) {
  let arrayLength = array.length;
  let filtered = [];
  let biggestNum = Number(array[0]);
  for (let i = 0; i < arrayLength; i++) {
    let currNum = Number(array[i]);
    if (i === 0) {
      filtered.push(currNum);
    } else if (biggestNum <= currNum) {
      biggestNum = currNum;
      filtered.push(currNum);
    }
  }
  console.log(filtered.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
