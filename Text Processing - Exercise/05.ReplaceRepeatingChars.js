function replaceRepeatingChars(string) {
  let newString = string;
  let output = "";
  for (let i = 0; i < newString.length; i++) {
    if (newString[i + 1] !== newString[i]) {
      output += newString[i];
    }
  }
  console.log(output);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
