function inventory(array) {
  let myJournal = array.shift().split(", ");
  for (let command of array) {
    if (command !== "Craft!") {
      command = command.split(" - ");
      let currentCommand = command.shift();
      let item = command.shift();
      switch (currentCommand) {
        case "Collect":
          if (myJournal.includes(item)) {
            continue;
          } else {
            myJournal.push(item);
          }
          break;
        case "Drop":
          if (myJournal.includes(item)) {
            myJournal.splice(myJournal.indexOf(item), 1);
          }
          break;
        case "Combine Items":
            let splitItems = item.split(":")
            if(myJournal.includes(splitItems[0])) {
                myJournal.splice(myJournal.indexOf(splitItems[0]), 0, splitItems[1]);
            } else {
                continue;
            }
          break;
        case "Renew":
            if(myJournal.includes(item)){
                let tempItem = myJournal.splice(myJournal.indexOf(item), 1);
                myJournal.push(tempItem)
            }
          break;
      }
    } else{
        console.log(myJournal.join(", "));
    }
  }
}
// inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
