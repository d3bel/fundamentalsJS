function addAndSubtract(numOne, numTwo, numThree) {
  let sum = (numOne, numTwo) => numOne + numTwo;
  return sum(numOne, numTwo) - numThree;
}
console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
