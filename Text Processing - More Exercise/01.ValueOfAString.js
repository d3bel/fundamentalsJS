function valueOfAString(array) {
  let sentence = array.shift();
  let command = array.shift();
  let sum = 0;
  for(let i = 0; i < sentence.length; i++) {
    if (command === "UPPERCASE") {
      if (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) {
        sum += sentence.charCodeAt(i);
      }
    } else if (command === "LOWERCASE") {
      if (sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122) {
        sum += sentence.charCodeAt(i);
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfAString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueOfAString(["AC/DC", "UPPERCASE"]);
