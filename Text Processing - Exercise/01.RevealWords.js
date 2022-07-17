function revealWords(word, sentenceTemplate) {
  let newSentence = sentenceTemplate;
  word.split(", ").forEach((word) => {
    newSentence = newSentence.replace("*".repeat(word.length), word);
  });
  console.log(newSentence);
}
// revealWords(
//   "great",
//   "softuni is ***** place for learning new programming languages"
// );
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
