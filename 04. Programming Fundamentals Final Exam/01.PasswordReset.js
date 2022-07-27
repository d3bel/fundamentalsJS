function passwordReset(input) {
  let stringPass = input.shift();
  for (let current of input) {
    if (current !== "Done") {
      let [command, token1, token2] = current.split(" ");
      switch (command) {
        case "TakeOdd":
          let rawPassword = "";
          for (let i = 0; i < stringPass.length; i++) {
            if (i % 2 === 1) {
              rawPassword += stringPass[i];
            }
          }
          stringPass = rawPassword;
          console.log(stringPass);
          break;
        case "Cut":
          token1 = Number(token1);
          token2 = Number(token2);
          let newString = stringPass.substring(token1, token1 + token2);
          stringPass = stringPass.replace(newString, "");
          console.log(stringPass);

          break;
        case "Substitute":
          if (stringPass.includes(token1)) {
            while (stringPass.includes(token1)) {
              stringPass = stringPass.replace(token1, token2);
            }
            console.log(stringPass);
          } else {
            console.log("Nothing to replace!");
          }
          break;
      }
    } else {
      console.log(`Your password is: ${stringPass}`);
    }
  }
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
