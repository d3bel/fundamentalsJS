function passwordValidator(arg) {
  let toArray = arg.split("");
  let digitCount = 0;
  let isValid = true;
  let isLengthEnough = true;
  let printLine = [];
  for (let i = 0; i < toArray.length; i++) {
    let currentChar = toArray[i];
    currentChar = currentChar.charCodeAt(0);
    if (
      (currentChar >= 48 && currentChar <= 57) ||
      (currentChar >= 65 && currentChar <= 90) ||
      (currentChar >= 97 && currentChar <= 122)
    ) {
      if (currentChar >= 48 && currentChar <= 57) {
        digitCount++;
      }
    } else {
      isValid = false;
    }
  }
  if (arg.length < 6 || arg.length > 10) {
    printLine.push("Password must be between 6 and 10 characters");
    isLengthEnough = false;
  }
  if (!isValid) {
    printLine.push("Password must consist only of letters and digits");
  }
  if (digitCount < 2) {
    printLine.push("Password must have at least 2 digits");
    isValid = false;
  }
  if (isValid && isLengthEnough) {
    printLine.push("Password is valid");
  }
  return printLine.join("\n");
}
// console.log(passwordValidator("logIn"));
// console.log(passwordValidator("MyPass123"));
// console.log(passwordValidator("Pa$s$s"));
// console.log(passwordValidator("jg2a6hhha2"));
// console.log(passwordValidator("`aa111"));
// console.log(passwordValidator("{112dd"));
// console.log(passwordValidator("@22dff"));
// console.log(passwordValidator("[ff245"));
// console.log(passwordValidator("/ae643"));
// console.log(passwordValidator(":12fhjj"));
console.log(passwordValidator(""));
