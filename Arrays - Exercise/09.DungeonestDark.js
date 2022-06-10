function dungeonestDark(array) {
  let newArr = array.toString("").split("|");
  // let newArr = stringInput
  let health = 100;
  let coins = 0;
  let stageCount = 0;
  let isAlive = true;
  for (let i = 0; i < newArr.length; i++) {
    stageCount++;
    let currObj = newArr[i].split(" ");
    if (currObj[0] === "potion") {
      let currPotion = Number(currObj[1]);
      if (health < 100) {
        let healingPoints = currPotion;
        health += currPotion;
        if (health > 100) {
          healingPoints = Math.abs(health - 100 - currPotion);
          health = 100;
        }
        console.log(`You healed for ${healingPoints} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (currObj[0] === "chest") {
      coins += Number(currObj[1]);
      console.log(`You found ${currObj[1]} coins.`);
    } else {
      health -= Number(currObj[1]);
      if (health > 0) {
        console.log(`You slayed ${currObj[0]}.`);
      } else {
        console.log(`You died! Killed by ${currObj[0]}.`);
        console.log(`Best room: ${stageCount}`);
        isAlive = false;
        break;
      }
    }
  }
  if (isAlive) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
