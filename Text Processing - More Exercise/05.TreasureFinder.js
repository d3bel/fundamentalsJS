function treasureFinder(array) {
  let newArray = array.slice();
  let key = newArray.shift().split(" ");
  let text = "";
  let printArray = [];
  while (newArray[0] !== "find") {
    let string = newArray.shift();
    let index = 0;
    text = "";
    for (let currStr of string) {
      let val = String.fromCharCode(
        currStr.charCodeAt() - key[index]
      ).toString();
      text += val;
      index == key.length - 1 ? (index = 0) : index++;
    }
    printArray.push(text);
  }
  for (let all of printArray) {
    let type = all.substring(all.indexOf("&") + 1, all.lastIndexOf("&"));
    let coordinates = all.substring(all.indexOf("<") + 1, all.lastIndexOf(">"));
    console.log(`Found ${type} at ${coordinates}`);
  }
}
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
