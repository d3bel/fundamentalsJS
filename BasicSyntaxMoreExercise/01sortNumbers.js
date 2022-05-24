function sortNums(num1, num2, num3) {
  let maxNum = Math.max(Math.max(num1, num2), num3);
  let minNum = Math.min(Math.min(num1, num2), num3);
  let midNum = 0;
  if (
    (maxNum === num1 && minNum === num2) ||
    (minNum === num1 && maxNum === num2)
  ) {
    midNum = num3;
  } else if (
    (maxNum === num2 && minNum === num3) ||
    (minNum === num2 && maxNum === num3)
  ) {
    midNum = num1;
  } else {
    midNum = num2;
  }
  console.log(`${maxNum}\n${midNum}\n${minNum}`);
}
sortNums(0, 0, 2);
