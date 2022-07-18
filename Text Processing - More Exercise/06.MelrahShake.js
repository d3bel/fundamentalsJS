function melrahShake(array) {
  let str = array[0];
  let pattern = array[1];

  while (pattern.length > 0) {
    if (str.indexOf(pattern) !== str.lastIndexOf(pattern)) {
      let firstPattern = str.indexOf(pattern);
      let lastPattern = str.lastIndexOf(pattern);
      str = str.split("");
      let strRem = str.splice(lastPattern, pattern.length);
      strRem = str.splice(firstPattern, pattern.length);
      str = str.join("");
      let removedPattern = pattern.split("").splice(pattern.length / 2, 1);
      pattern = pattern.replace(removedPattern, "");
      console.log("Shaked it.");
    } else {
      break;
    }
  }
  console.log("No shake.");
  console.log(str);
}
melrahShake(["astalavista baby", "sta"]);
melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);
