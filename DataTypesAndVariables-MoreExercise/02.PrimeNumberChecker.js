function primeNumberChecker(num) {
  let isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("false");
      isPrime = true;
      break;
    }
  }
  if (!isPrime) {
    console.log("true");
  }
}
primeNumberChecker(7);
// primeNumberChecker(8);
// primeNumberChecker(81);
