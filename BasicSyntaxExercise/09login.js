function login(input) {
  let index = 0;
  let userName = input[index++];
  let password = userName.split("").reverse().join("");
  let counter = 0;
  let command = input[index++];
  let isCorrect = false;
  while (command !== password) {
    if (counter >= 3) {
      console.log(`User ${userName} blocked!`);
      isCorrect = true;
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
    counter++;
    command = input[index++];
  }
  if (!isCorrect) {
    console.log(`User ${userName} logged in.`);
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
login(["momo", "omom"]);
