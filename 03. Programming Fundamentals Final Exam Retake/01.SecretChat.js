function secretChat(input) {
  let message = input.shift();
  while (input[0] !== "Reveal") {
    let [command, input1, input2] = input.shift().split(":|:");
    switch (command) {
      case "InsertSpace":
        message =
          message.substring(0, input1) + " " + message.substring(input1);
        console.log(message);
        break;
      case "Reverse":
        if (message.includes(input1)) {
          let revText = message
            .slice(
              message.indexOf(input1),
              message.indexOf(input1) + input1.length
            )
            .split("")
            .reverse()
            .join("");
          message = message.replace(input1, "");
          message += revText;
          console.log(message);
        } else {
          console.log("error");
        }
        break;
      case "ChangeAll":
        while (message.includes(input1)) {
          message = message.replace(input1, input2);
        }
        console.log(message);
        break;
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
