function reverseInPlace(input) {
  let lengthOfArray = input.length - 1;
  for (let i = 0; i < input.length / 2; i++, lengthOfArray--) {
    let imagine = input[i];
    input[i] = input[lengthOfArray];
    input[lengthOfArray] = imagine;
  }
  console.log(input.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
