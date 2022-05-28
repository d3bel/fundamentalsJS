function evenAndOddSubtraction(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  } 
  let oddNums = 0;
  let evenNums = 0;
  for(let numbers of input) {
      if(numbers % 2 === 0) {
          evenNums += numbers;
      } else {
          oddNums += numbers
      }
  } console.log(evenNums - oddNums);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);
