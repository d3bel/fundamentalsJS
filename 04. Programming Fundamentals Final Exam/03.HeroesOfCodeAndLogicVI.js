function heroesOfLogicVII(input) {
  let heroesCount = Number(input.shift());
  let heroesList = {};
  while (heroesCount > 0) {
    let [name, hp, mp] = input.shift().split(" ");
    heroesList[name] = {
      hp: Number(hp),
      mp: Number(mp),
    };
    heroesCount--;
  }
  for (let currentInput of input) {
    if (currentInput !== "End") {
      let [command, heroName, token1, token2] = currentInput.split(" - ");
      token1 = Number(token1);
      switch (command) {
        //         "CastSpell – {hero name} – {MP needed} – {spell name}"
        // •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
        // o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
        // •	If the hero is unable to cast the spell print:
        // o	"{hero name} does not have enough MP to cast {spell name}!"

        case "CastSpell":
          if (heroesList[heroName].mp >= token1) {
            heroesList[heroName].mp -= token1;
            console.log(
              `${heroName} has successfully cast ${token2} and now has ${heroesList[heroName].mp} MP!`
            );
          } else {
            console.log(
              `${heroName} does not have enough MP to cast ${token2}!`
            );
          }
          break;
        //         "TakeDamage – {hero name} – {damage} – {attacker}"
        // •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
        // o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
        // •	If the hero has died, remove him from your party and print:
        // o	"{hero name} has been killed by {attacker}!"
        case "TakeDamage":
          if (heroesList[heroName].hp - token1 > 0) {
            heroesList[heroName].hp -= token1;
            console.log(
              `${heroName} was hit for ${token1} HP by ${token2} and now has ${heroesList[heroName].hp} HP left!`
            );
          } else {
            delete heroesList[heroName];
            console.log(`${heroName} has been killed by ${token2}!`);
          }
          break;
        //         "Recharge – {hero name} – {amount}"
        // •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200),
        //      MP is increased to 200. (the MP can't go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} recharged for {amount recovered} MP!"
        case "Recharge":
          if (heroesList[heroName].mp + token1 <= 200) {
            heroesList[heroName].mp += token1;
            console.log(`${heroName} recharged for ${token1} MP!`);
          } else {
            let diffMP = heroesList[heroName].mp - 200 + token1;
            heroesList[heroName].mp = 200;
            console.log(`${heroName} recharged for ${token1 - diffMP} MP!`);
          }
          break;
        //          "Heal – {hero name} – {amount}"
        // •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100),
        //      HP is increased to 100 (the HP can't go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} healed for {amount recovered} HP!"
        case "Heal":
          if (heroesList[heroName].hp + token1 <= 100) {
            heroesList[heroName].hp += token1;
            console.log(`${heroName} healed for ${token1} HP!`);
          } else {
            let diffHP = heroesList[heroName].hp - 100 + token1;
            heroesList[heroName].hp = 100;
            console.log(`${heroName} healed for ${token1 - diffHP} HP!`);
          }
          break;
      }
    } else {
      for (let hero in heroesList) {
        console.log(
          `${hero}\n  HP: ${heroesList[hero].hp}\n  MP: ${heroesList[hero].mp}`
        );
      }
    }
  }
}
// heroesOfLogicVII([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);
heroesOfLogicVII([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
