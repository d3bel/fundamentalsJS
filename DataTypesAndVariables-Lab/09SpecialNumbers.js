function specialNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i === 5 || i === 7) {
      console.log(`${i} -> True`);
    } else if (i > 9) {
      let splitDigit = i.toString().split("");
      let firstDigit = Number(splitDigit[0]);
      let secondDigit = Number(splitDigit[1]);
      sum = firstDigit + secondDigit;
      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
      console.log(`${i} -> False`);
    }
    } else {
        console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);
specialNumbers(20)
