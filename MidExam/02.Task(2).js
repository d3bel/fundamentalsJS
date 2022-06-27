function spaceTravel(array) {
  let ammunition = Number(array.pop());
  let fuel = Number(array.pop());
  let newArray = array.toString("").split("||");
  for (let command of newArray) {
    let currentArray = command.split(" ");
    let currCommand = currentArray.shift();
    switch (currCommand) {
      case "Travel":
        let lightYears = Number(currentArray);
        if (lightYears <= fuel) {
          fuel -= lightYears;
          console.log(`The spaceship travelled ${lightYears} light-years.`);
        } else {
          return console.log("Mission failed.");
        }
        break;
      case "Enemy":
        let enemyArmor = Number(currentArray);
        if (ammunition >= enemyArmor) {
          ammunition -= enemyArmor;
          console.log(`An enemy with ${enemyArmor} armour is defeated.`);
        } else if (fuel / 2 >= enemyArmor) {
          fuel -= enemyArmor * 2;
          console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
        } else {
          return console.log("Mission failed.");
        }
        break;
      case "Repair":
        let addFuelAndAmo = Number(currentArray);
        fuel += addFuelAndAmo;
        ammunition += addFuelAndAmo * 2;
        console.log(
          `Ammunitions added: ${
            addFuelAndAmo * 2
          }.\nFuel added: ${addFuelAndAmo}.`
        );
        break;
      case "Titan":
        return console.log("You have reached Titan, all passengers are safe.");
        break;
    }
  }
}
// spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);

spaceTravel([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
