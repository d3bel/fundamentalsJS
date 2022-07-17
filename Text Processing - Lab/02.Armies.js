function armies(array) {
  let myArmies = {};
  array.forEach((command) => {
    if (command.includes("arrives")) {
      let leader = command.replace(" arrives", "");
      myArmies[leader] = {};
    } else if (command.includes(":")) {
      let [leader, armyNameCount] = command.split(": ");
      let [armyName, armyCount] = armyNameCount.split(", ");
      if (myArmies.hasOwnProperty(leader)) {
        myArmies[leader][armyName] = Number(armyCount);
      }
    } else if (command.includes("+")) {
      let [armyName, armyCount] = command.split(" + ");
      for (let leader in myArmies) {
        if (myArmies[leader].hasOwnProperty(armyName)) {
          myArmies[leader][armyName] += Number(armyCount);
        }
      }
    } else if (command.includes("defeated")) {
      let leader = command.replace(" defeated", "");
      if (myArmies.hasOwnProperty(leader)) {
        delete myArmies[leader];
      }
    }
  });
  for (let leaderName in myArmies) {
    let totalArmy = 0;
    let currentArmyName = myArmies[leaderName];
    for (let armyQuantity in currentArmyName) {
      totalArmy += currentArmyName[armyQuantity];
    }
    currentArmyName["totalArmy"] = totalArmy;
  }
  Object.entries(myArmies)
    .sort((a, b) => b[1].totalArmy - a[1].totalArmy)
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1].totalArmy}`);
      delete el[1].totalArmy;
      Object.entries(el[1])
        .sort((a, b) => b[1] - a[1])
        .forEach((el) => {
          console.log(`>>> ${el[0]} - ${el[1]}`);
        });
    });
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
console.log(" ------------------------------- ");
armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
