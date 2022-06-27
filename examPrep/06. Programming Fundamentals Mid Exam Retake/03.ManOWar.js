function manOWar(array) {
  let pirateShipeStatus = array.shift().split(">").map(Number);
  let warShipeStatus = array.shift().split(">").map(Number);
  let maxSectionHealth = Number(array.shift());
  let sumOfPirates = 0;
  let sumOfWarship = 0;
  let countOfSecNeedRepair = 0;
  let test = maxSectionHealth * 0.2;
  let printLine = [];

  for (let command of array) {
    if (command !== "Retire") {
      command = command.split(" ");
      let currCommand = command.shift();
      switch (currCommand) {
        case "Fire":
          let index = Number(command[0]);
          let damage = Number(command[1]);
          if (index < 0 && index > warShipeStatus.length) {
              continue;
        }
        else {
            warShipeStatus[index] -= damage;
            if (warShipeStatus[index] <= 0) {
                printLine.push(`You won! The enemy ship has sunken.`);
                return printLine.join("\n");
            } 
          }
          break;
        case "Defend":
          let startIndex = Number(command[0]);
          let endIndex = Number(command[1]);
          let defendingDamage = Number(command[2]);
          if (
            startIndex < 0 &&
            startIndex > pirateShipeStatus.length &&
            endIndex < 0 &&
            endIndex > pirateShipeStatus.length
          ) {
            continue;
          } else {
            for (let i = startIndex; i <= endIndex; i++) {
              pirateShipeStatus[i] -= defendingDamage;
              if (pirateShipeStatus[i] <= 0) {
                printLine.push(`You lost! The pirate ship has sunken.`);
                return printLine.join("\n");
              }
            }
          }
          break;
        case "Repair":
          let repairIndex = Number(command[0]);
          let health = Number(command[1]);
          if (repairIndex >= 0 && repairIndex <= pirateShipeStatus.length) {
            pirateShipeStatus[repairIndex] += health;
            if (pirateShipeStatus + health > maxSectionHealth) {
              pirateShipeStatus = maxSectionHealth;
            } else {
            }
          } else {
            continue;
          }
          break;
        case "Status":
          for (let i = 0; i < pirateShipeStatus.length; i++) {
            if (pirateShipeStatus[i] < test) {
              countOfSecNeedRepair++;
            }
          }
          printLine.push(`${countOfSecNeedRepair} sections need repair.`);
          break;
      }
    } else {
      for (let lifePiratesLeft of pirateShipeStatus) {
        sumOfPirates += lifePiratesLeft;
      }
      for (let lifeLeft of warShipeStatus) {
        sumOfWarship += lifeLeft;
      }
    }
  }
  printLine.push(
    `Pirate ship status: ${sumOfPirates}\nWarship status: ${sumOfWarship}`
  );
  return printLine.join("\n");
}
console.log(
  manOWar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire",
  ])
);
console.log(
  manOWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
  ])
);
