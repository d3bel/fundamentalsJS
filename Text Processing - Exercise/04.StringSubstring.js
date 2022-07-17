function stringSubstring(word, text) {
  let newText = text.toLowerCase().split(" ");

  if (newText.includes(word)) {
    console.log(newText[newText.indexOf(word)]);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
