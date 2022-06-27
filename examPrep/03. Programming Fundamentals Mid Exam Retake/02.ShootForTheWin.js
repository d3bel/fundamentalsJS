function shootForTheWin(array) {
  let targets = array.shift().split(" ").map(Number);
  let shotCount = 0;
  for (let shot of array) {
    if (shot !== "End") {
      let currShot = Number(shot);
      if (currShot < 0 || currShot > targets.length - 1) {
        continue;
      }
      let shotTarget = targets.splice(currShot, 1, -1);
      shotCount++;
      for (let i = 0; i < targets.length; i++) {
        if (shotTarget >= targets[i] && targets[i] !== -1) {
          targets[i] += Number(shotTarget);
        } else if (shotTarget < targets[i] && targets[i] !== -1) {
          targets[i] -= shotTarget;
        }
      }
    } else {
      console.log(`Shot targets: ${shotCount} -> ${targets.join(" ")}`);
    }
  }
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
