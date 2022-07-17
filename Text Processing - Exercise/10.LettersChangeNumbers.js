function lettersChangeNumbers(str) {
  let arrayOfString = str.split(" ");
  let uperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let lowerCase = uperCase.join("").toLowerCase().split("");
  let firstSum = 0;
  let totalSum = 0;
  for (let eachArr of arrayOfString) {
    if (eachArr.length > 0) {
      let currString = eachArr.split("");
      let firstLetter = currString.shift();
      let lastLetter = currString.pop();
      let num = Number(currString.join(""));
      if (uperCase.includes(firstLetter)) {
        let index = uperCase.indexOf(firstLetter) + 1;
        firstSum += num / index;
    } else if (lowerCase.includes(firstLetter)) {
        let index = lowerCase.indexOf(firstLetter) + 1;
        firstSum += num * index;
    } if (uperCase.includes(lastLetter)) {
        let index = uperCase.indexOf(lastLetter) + 1;
        firstSum -= index;
    } else if (lowerCase.includes(lastLetter)){
        let index = lowerCase.indexOf(lastLetter) + 1;
        firstSum += index;
    }
} totalSum += firstSum;
firstSum = 0;
}
console.log(totalSum.toFixed(2));
}
lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");
