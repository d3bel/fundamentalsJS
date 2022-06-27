function muOnline(string) {
  let health = 100;
  let coins = 0;
  let room = 0;
  let array = string.split("|");
  let isAlive = true;
  for (let currAction of array) {
    room++;
    currAction = currAction.split(" ");
    let action = currAction[0];
    let value = Number(currAction[1]);
    switch (action) {
      case "potion":
        let healingValue = value;
        if (health + value <= 100) {
            health += value;
            console.log(`You healed for ${healingValue} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
          healingValue = Math.abs(health + value - 100 - value);
          health += value;
          if (health > 100) {
              health = 100;
            }
            console.log(`You healed for ${healingValue} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        coins += value;
        console.log(`You found ${value} bitcoins.`);
        break;
      default:
        health -= value;
        if (health <= 0) {
          isAlive = false;
          return console.log(
            `You died! Killed by ${action}.\nBest room: ${room}`
          );
        } else {
          console.log(`You slayed ${action}.`);
        }
        break;
    }
  }
  if (isAlive) {
    console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
  }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("-----------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
