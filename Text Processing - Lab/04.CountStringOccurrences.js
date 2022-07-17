function countStringOccurrences(sentence, lookupWords) {
  let array = sentence.split(" ");
  let count = array.filter((word) => word === lookupWords).length;
  console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
