function oddOccurrences(string) {
  let strToArr = string.toLowerCase().split(" ");
  let myStrMap = new Map();
  for (let currStr of strToArr) {
    if (!myStrMap.has(currStr)) {
      myStrMap.set(currStr, 0);
    }
    myStrMap.set(currStr, myStrMap.get(currStr) + 1);
  }
  let fiteredString = Array.from(myStrMap).filter(([key, value]) => {
    return value % 2 !== 0;
  })
  let printLine = [];
 for (let [key, value] of fiteredString) {
    printLine.push(key)
 }
 console.log(printLine.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
