function race(input) {
  let racersList = input.shift();
  let pattern = /[A-Z]+/gi;
  let totalKMofRacers = {};
  for (let curr of input) {
    if (curr !== "end of race") {
      if (racersList.includes(curr.match(pattern).join(""))) {
        let name = curr.match(pattern).join("");
        let numKM = curr.match(/\d+/gi).join("");
        let totalKM = 0;
        for (let i = 0; i < numKM.length; i++) {
          totalKM += Number(numKM[i]);
        }
        if (!totalKMofRacers.hasOwnProperty(name)) {
          totalKMofRacers[name] = totalKM;
        } else {
          totalKMofRacers[name] += totalKM;
        }
      }
    }
  }
  let sortedRacers = Object.entries(totalKMofRacers).sort(
    (a, b) => b[1] - a[1]
  );

  console.log(`1st place: ${sortedRacers[0][0]}\n2nd place: ${sortedRacers[1][0]}\n3rd place: ${sortedRacers[2][0]}
    `);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
