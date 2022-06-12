function loadingBar(number) {
  let completeBar = "%".repeat(number / 10);
  let incompleteBar = ".".repeat(10 - completeBar.length);
  let printLine =
    incompleteBar.length === 0
      ? `100% Complete!\n[${completeBar}]`
      : `${number}% [${completeBar}${incompleteBar}]\nStill loading...`;
  return printLine;
}
console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));
