function passwordGenerator(str) {
  let firstString = str.shift();
  let secondString = str.shift();
  let combined = firstString + secondString;
  let lettersToReplace = ["a", "e", "i", "o", "u"];
  let keyWord = str.shift().toUpperCase();
  let index = 0;
  for (let i = 0; i < combined.length; i++) {
    let currChar = combined[i];
    for (const letter of lettersToReplace) {
      if (currChar == letter) {
        combined = combined.replace(currChar, keyWord[index]);
        index == keyWord.length - 1? (index = 0) : index++;
        
      }
    }
  }
  let output = combined.split("").reverse().join("");
  console.log(`Your generated password is ${output}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);