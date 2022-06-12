function palindromeIntegers(array) {
  let isPalindrome = false;
  for (let i = 0; i < array.length; i++) {
    let currNum = String(array[i]);
    let reversedCurrNum = currNum.split("").reverse().join("");
    if (currNum === reversedCurrNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
// palindromeIntegers([123, 323, 421, 121]);
// palindromeIntegers([32, 2, 232, 1010]);
