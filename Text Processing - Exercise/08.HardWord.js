
function hardWord(array) {
  let sentence = array.shift();
  let newArray = array[0];
  let underscore = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "_" && sentence[i + 1] === "_") {
      underscore += sentence[i];
    } else if (sentence[i] === "_" && sentence[i + 1] != "_") {
      underscore += sentence[i];
      for (let currW of newArray) {
        if (currW.length === underscore.length) {
          sentence = sentence.replace(underscore, currW);
          underscore = "";
        }
      }
    }
  }
  console.log(sentence);
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
