function mirrorWords(input) {
  pattern = /(@|#)(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
  let arrayOfMirrorWords = [];
  let countOfPairs = 0;
  let validPairs;
  while ((validPairs = pattern.exec(input)) !== null) {
    let word1 = validPairs.groups["word1"];
    let word2 = validPairs.groups["word2"];
    if (word1 === word2.split("").reverse().join("")) {
      arrayOfMirrorWords.push(`${word1} <=> ${word2}`);
    }
    if (word1 && word2) {
      countOfPairs++;
    }
  }
  if (countOfPairs > 0) {
    console.log(`${countOfPairs} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (arrayOfMirrorWords.length > 0) {
    console.log("The mirror words are:");
    console.log(arrayOfMirrorWords.join(", ").trim());
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
