function equalArrays(input, secondInput) {
  let isEqual = true;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }
  for (let i = 0; i < secondInput.length; i++) {
    secondInput[i] = Number(secondInput[i]);
    if (input[i] !== secondInput[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isEqual = false;
      break;
    } else {
      sum += input[i];
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
console.log("----");
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
console.log("----");
equalArrays(["1"], ["10"]);
