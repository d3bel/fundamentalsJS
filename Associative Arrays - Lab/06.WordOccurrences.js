function wordOccurrences(arrays) {
  let words = new Map();
  arrays.forEach((word) => {
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  });
  let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1]);
  for(let [eachWord, repeatWord] of sortedWords) {
    console.log(`${eachWord} -> ${repeatWord} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
console.log('-----------------------------------------');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
