function engNameOfLastDigit(nums) {
  let numToString = nums.toString();
  let lastLeter = numToString.split("").reverse();
  let stringToNumber = Number(lastLeter[0]);
  switch (stringToNumber) {
    case 0:
      lastLeter = "zero";
      break;
    case 1:
      lastLeter = "one";
      break;
    case 2:
      lastLeter = "two";
      break;
    case 3:
      lastLeter = "three";
      break;
    case 4:
      lastLeter = "four";
      break;
    case 5:
      lastLeter = "five";
      break;
    case 6:
      lastLeter = "six";
      break;
    case 7:
      lastLeter = "seven";
      break;
    case 8:
      lastLeter = "eight";
      break;
    case 9:
      lastLeter = "nine";
      break;
  }
  console.log(lastLeter);
}
engNameOfLastDigit(512);
engNameOfLastDigit(1);
engNameOfLastDigit(1643);
