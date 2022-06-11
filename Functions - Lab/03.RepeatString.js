function repeatString(string, repeat) {
  let printLine = "";
  for (let i = 0; i < repeat; i++) {
    printLine += string;
  }
  return printLine;
}
console.log(repeatString("string", 2));
