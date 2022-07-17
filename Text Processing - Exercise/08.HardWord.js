function hardWord(array) {
  let sentence = array.shift();
  let newArray = array[0];
  let arrayOfUnderscore = [];
  newArray.forEach((word) => {
    let currLenght = "_".repeat(word.length);
    arrayOfUnderscore.push(currLenght);
  });
  arrayOfUnderscore.sort((a, b) => b.length - a.length);
  newArray.sort((a, b) => b.length - a.length);
  for (let i = 0; i < arrayOfUnderscore.length; i++) {
    sentence = sentence.replace(arrayOfUnderscore[i], newArray[i]);
  }
  console.log(sentence);
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
