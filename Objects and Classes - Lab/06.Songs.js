function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let arrayOfSongList = [];
  let songNums = array.shift();
  let typeSong = array.pop();
 for (let currSong of array) {
    let typeNameTime = currSong.split("_");
    if (typeNameTime[0] === typeSong) {
      arrayOfSongList.push(typeNameTime[1]);
    } else if (typeSong === "all") {
      arrayOfSongList.push(typeNameTime[1]);
    }
  }
  for (let songList of arrayOfSongList) {
   console.log(`${songList}`);
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
