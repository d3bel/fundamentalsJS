function counterStrike(array) {
  let energy = Number(array.shift());
  let winCount = 0;
  for (let distance of array) {
    if (distance !== "End of battle") {
      let currDistance = Number(distance);
      if (energy - currDistance < 0) {
        return console.log(
          `Not enough energy! Game ends with ${winCount} won battles and ${energy} energy`
        );
      }
      energy -= currDistance;
      winCount++;
    } else {
      console.log(`Won battles: ${winCount}. Energy left: ${energy}`);
    }
    if (winCount % 3 === 0) {
      energy += winCount;
    }
  }
}
// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
// counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
counterStrike(["10", "10"]);
