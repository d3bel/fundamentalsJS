function memoryGame(array) {
  let sequence = array.shift().split(" ");
  let index = 0;
  let command = array[index++];
  let moves = 0;
  let isWin = false;

  while (command !== "end") {
    moves++;
    let currIndexes = command.split(" ").sort((a, b) => b - a);
    let firstIndex = Number(currIndexes[0]);
    let secondIndex = Number(currIndexes[1]);
    if (
      firstIndex === secondIndex ||
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex >= sequence.length ||
      secondIndex >= sequence.length
    ) {
      sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
      command = array[index++];
    } else if (sequence[firstIndex] === sequence[secondIndex]) {
      console.log(
        `Congrats! You have found matching elements - ${sequence[firstIndex]}!`
      );
      sequence.splice(firstIndex, 1);
      sequence.splice(secondIndex, 1);
      command = array[index++];
      if (sequence.length < 1) {
        isWin = true;
        return console.log(`You have won in ${moves} turns!`);
      }
    } else if (sequence[firstIndex] !== sequence[secondIndex]) {
      console.log("Try again!");
      command = array[index++];
    }
  }
  if (!isWin) {
    console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("---------------------");
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("---------------------");
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
