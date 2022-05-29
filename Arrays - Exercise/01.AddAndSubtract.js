function addAndSubtract(input) {
  let outputArray = [];
  let inputSum = 0;
  let addAndSubtractSum = 0;
  for (let i = 0; i < input.length; i++) {
    inputSum += input[i];
    let temp = input[i];
    if (temp % 2 === 0) {
      outputArray.push(input[i] + i);
    } else {
      outputArray.push(input[i] - i);
    }
  }
  for (let temp of outputArray) {
    addAndSubtractSum += temp;
  }
  console.log(outputArray);
  console.log(inputSum)
  console.log(addAndSubtractSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
