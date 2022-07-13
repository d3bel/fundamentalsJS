function arenaTier(array) {
  let gladiatorsList = {};

  for (let gladiator of array) {
    if (gladiator === "Ave Cesar") {
      break;
    } else if (gladiator.includes("vs")) {
      let [name1, name2] = gladiator.split(" vs ");
      let totalSkillPoints1 = 0;
      let totalSkillPoints2 = 0;
      for (let skill1 in gladiatorsList[name1]) {
        totalSkillPoints1 += gladiatorsList[name1][skill1];
      }
      for (let skill2 in gladiatorsList[name2]) {
        totalSkillPoints2 += gladiatorsList[name2][skill2];
      }
      if (
        gladiatorsList.hasOwnProperty(name1) &&
        gladiatorsList.hasOwnProperty(name2)
      ) {
        for (let skill in gladiatorsList[name1]) {
          if (gladiatorsList[name2].hasOwnProperty(skill)) {
            if (totalSkillPoints1 > totalSkillPoints2) {
              delete gladiatorsList[name2];
              break;
            } else {
              delete gladiatorsList[name1];
              break;
            }
          }
        }
      }
    } else if (gladiator.includes("->")) {
      let [name, technique, value] = gladiator.split(" -> ");
      value = Number(value);
      if (!gladiatorsList.hasOwnProperty(name)) {
        gladiatorsList[name] = {};
      }
      if (
        !gladiatorsList[name].hasOwnProperty(technique) ||
        gladiatorsList[name][technique] < value
      ) {
        gladiatorsList[name][technique] = value;
      }
    }
  }
  for (let name in gladiatorsList) {
    let points = 0;
    let technique = gladiatorsList[name];
    for (let value in technique) {
      points += technique[value];
    }
    technique["points"] = points;
  }

  Object.entries(gladiatorsList)
    .sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0]))
    .forEach((element) => {
      console.log(`${element[0]}: ${element[1].points} skill`);
      delete element[1].points;
      Object.entries(element[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((element) => {
          console.log(` - ${element[0]} <!> ${element[1]}`);
        });
    });
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
console.log("-----------------------------");
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Julius -> Support -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
