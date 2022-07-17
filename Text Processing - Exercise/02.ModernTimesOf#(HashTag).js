function modernTimesOfHashTag(sentence) {
  let newSentence = sentence;
  let arrayOfSentence = newSentence.split(" ");
  for (let el of arrayOfSentence) {
    if (el.startsWith("#") && el.length > 1) {
      let isNumber = false;
      let elLower = el.toLowerCase();
      for (let i = 1; i < elLower.length; i++) {
        if (elLower.charCodeAt(i) < 97 || elLower.charCodeAt(i) > 122) {
          isNumber = true;
        }
      }
      if (!isNumber) {
        console.log(el.slice(1));
      }
    }
  }
}
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
modernTimesOfHashTag(
  "The symbol # is known #variously in English-speaking #asd555 #regions as the #number sign"
);
// && el.charAt() > 97 && el.charAt() < 122)
