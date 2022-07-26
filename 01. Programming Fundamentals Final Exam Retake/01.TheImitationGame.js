function theImitationGame(array) {
  let theMessage = array.shift();
  let newArray = theMessage;
  while (array != "Decode") {
    let currState = array.shift();
    let [command, el1, el2] = currState.split("|");
    if (command === "Move") {
      newArray = newArray.split("");
      el1 = Number(el1);
      for (let i = 0; i < el1; i++) {
        let temp = newArray.shift();
        newArray.push(temp);
      }
      newArray = newArray.join("");
    } else if (command === "Insert") {
      newArray = newArray.split("");
      el1 = Number(el1);
      let repl = newArray.splice(el1, 0, el2);
      newArray = newArray.join("");
    } else if (command === "ChangeAll") {
      while (newArray.includes(el1)) {
        newArray = newArray.replace(el1, el2);
      }
    }
  }
  console.log(`The decrypted message is: ${newArray}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
