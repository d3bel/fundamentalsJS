function perfectNumber(number) {
  let sumOfNums = 1;
  for (let currNum = 2; currNum < number; currNum++) {
    if (number % currNum === 0) {
      sumOfNums += currNum;
    }
  }
  let printLine =
    sumOfNums === number ? "We have a perfect number!" : "It's not so perfect.";
    return printLine;
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));
