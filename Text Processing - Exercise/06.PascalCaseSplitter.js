function pascalCaseSplitter(string) {
  let printLine = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      if (count > 0) {
        printLine += `, ${string[i]}`;
      } else {
        count++;
        printLine = `${string[i]}`;
      }
    } else {
      printLine += `${string[i]}`;
    }
  }
  console.log(printLine);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
