function oddAndEvenSum(num) {
  let array = num.toString();
  array = array.split('')
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    let currNum = Number(array[i]);
    if (currNum % 2 === 0) {
      evenSum += currNum;
    } else {
      oddSum += currNum;
    }
  } return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
