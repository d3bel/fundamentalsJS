function thePianist(input) {
  let startingPlayList = Number(input.shift());
  let fullPlaylist = {};
  for (let i = 0; i < startingPlayList; i++) {
    let [piece, composer, key] = input.shift().split("|");
    fullPlaylist[piece] = {
      composer: composer,
      key: key,
    };
  }
  for (let currCommand of input) {
    if (currCommand !== "Stop") {
      let [command, currPiece, composer, key] = currCommand.split("|");
      if (command === "Add") {
        if (fullPlaylist.hasOwnProperty(currPiece)) {
          console.log(`${currPiece} is already in the collection!`);
        } else {
          fullPlaylist[currPiece] = { composer, key };
          console.log(
            `${currPiece} by ${composer} in ${key} added to the collection!`
          );
        }
      } else if (command === "Remove") {
        if (fullPlaylist.hasOwnProperty(currPiece)) {
          delete fullPlaylist[currPiece];
          console.log(`Successfully removed ${currPiece}!`);
        } else {
          console.log(
            `Invalid operation! ${currPiece} does not exist in the collection.`
          );
        }
      } else if (command === "ChangeKey") {
        if (fullPlaylist.hasOwnProperty(currPiece)) {
          fullPlaylist[currPiece].key = composer;
          console.log(`Changed the key of ${currPiece} to ${composer}!`);
        } else {
          console.log(
            `Invalid operation! ${currPiece} does not exist in the collection.`
          );
        }
      }
    }
  }
  for (let byTrack in fullPlaylist) {
    console.log(
      `${byTrack} -> Composer: ${fullPlaylist[byTrack].composer}, Key: ${fullPlaylist[byTrack].key}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
