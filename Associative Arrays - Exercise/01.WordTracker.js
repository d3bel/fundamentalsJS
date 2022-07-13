function wordTracker(array) {
  let keyWords = array.shift().split(" ");
  let byWord = new Map();
  for (let word of keyWords) {
    byWord.set(word, 0);
  }
  for (let word of array) {
    if (byWord.has(word)) {
      byWord.set(word, byWord.get(word) + 1);
    }
  }
  let sortedResult = Array.from(byWord).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    }
  );
  for(let [key, value] of sortedResult) {
    console.log(`${key} - ${value}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
