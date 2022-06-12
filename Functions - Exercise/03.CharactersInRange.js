function charactersInRange(charOne, charTwo) {
  let startChar = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
  let endChar = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
  let charResult = [];
  for (let i = startChar + 1; i < endChar; i++) {
    let currentChar = String.fromCharCode(i);
    charResult.push(currentChar);
  }
  return charResult.join(" ");
}
console.log(charactersInRange("a", "d"));
console.log(charactersInRange("#", ":"));
console.log(charactersInRange("C", "#"));
