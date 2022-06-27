function heartDelivery(array) {
  let neightborhood = array.shift().split("@");
  let neightborhoodLength = neightborhood.length;
  let lastPosition = 0;

  for (let jumpCommand of array) {
    if (jumpCommand !== "Love!") {
      jumpCommand = jumpCommand.split(" ");
      let currJump = Number(jumpCommand[1]);
      lastPosition += currJump;

      if (lastPosition >= neightborhoodLength) {
        lastPosition = 0;
      }
      if (neightborhood[lastPosition] > 0) {
        neightborhood[lastPosition] -= 2;
        if (neightborhood[lastPosition] == 0) {
          console.log(`Place ${lastPosition} has Valentine's day.`);
        }
      } else {
        console.log(`Place ${lastPosition} already had Valentine's day.`);
      }
    } else {
      let numOfFails = 0;
      for (let failedPlaces of neightborhood) {
        let currIndex = Number(failedPlaces);
        if (currIndex > 0) {
          numOfFails++;
        }
      }
      console.log(`Cupid's last position was ${lastPosition}.`);
      if (numOfFails === 0) {
        console.log("Mission was successful.");
      } else {
        console.log(`Cupid has failed ${numOfFails} places.`);
      }
    }
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
