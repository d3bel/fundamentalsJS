function experienceGaming(array) {
  let neededXP = Number(array.shift());
  let battlesCount = Number(array.shift());
  let count = 0;
  let sumOfExperience = 0;
  for (let currentBattle of array) {
    count++;
    if (count % 3 === 0) {
      sumOfExperience += currentBattle * 0.15;
    }
    if (count % 5 === 0) {
      sumOfExperience -= currentBattle * 0.1;
    }
    if (count % 15 === 0) {
      sumOfExperience += currentBattle * 0.05;
    }
    sumOfExperience += currentBattle;
    if(sumOfExperience >= neededXP) {
        break;
    }
  }
  if (sumOfExperience < neededXP) {
    let diff = neededXP - sumOfExperience;
    console.log(
      `Player was not able to collect the needed experience, ${diff.toFixed(
        2
      )} more needed.`
    );
  } else if (sumOfExperience >= neededXP) {
    console.log(
      `Player successfully collected his needed experience for ${count} battles.`
    );
  }
}
experienceGaming([500, 5, 50, 100, 200, 100, 30]);
experienceGaming([500, 5, 50, 100, 200, 100, 20]);
experienceGaming([400, 5, 50, 100, 200, 100, 20]);
