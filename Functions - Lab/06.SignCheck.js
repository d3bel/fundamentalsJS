function signCheck(numOne, numTwo, numThree) {
  let fitstResult = numOne * numTwo;
  let secondResult = numTwo * numThree;
  let thirdResult = numThree * numOne;
  let num = -4;
  if (
    (fitstResult < 0 && numThree < 0) ||
    (secondResult < 0 && numOne <0) ||
    (thirdResult < 0 && numTwo < 0)
  ) {
    return "Positive";
  } else if (
    (fitstResult > 0 && numThree > 0) ||
    (secondResult > 0 && numOne > 0) ||
    (thirdResult > 0 && numTwo > 0)
  ) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
