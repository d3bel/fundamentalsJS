function treasureHunt(array) {
  let treasureChest = array.shift().split("|");

  for (let command of array) {
    if (command != "Yohoho!") {
      command = command.split(" ");
      let currentCommand = command.shift();
      switch (currentCommand) {
        case "Loot":
          for (let currLoot of command) {
            if (treasureChest.includes(currLoot)) {
              continue;
            } else {
              treasureChest.unshift(currLoot);
            }
          }
          break;
        case "Drop":
          if (command > treasureChest.length || command < 0) {
            continue;
          } else {
            let tempItem = treasureChest.splice(command, 1);
            treasureChest.push(tempItem.join());
          }
          break;
        case "Steal":
          if (command > treasureChest.length || command < 0) {
            let removedItems = treasureChest.splice(0, treasureChest.length);
            console.log(`${removedItems.join(", ")}`);
          } else {
            removedItems = treasureChest.splice(-command, command);
            console.log(`${removedItems.join(", ")}`);
          }
          break;
      }
    } else {
      if (treasureChest.length <= 0) {
        console.log(`Failed treasure hunt.`);
      } else {
        let sum = 0;
        for (let length of treasureChest) {
          sum += length.length;
        }
        sum = sum / treasureChest.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
      }
    }
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
