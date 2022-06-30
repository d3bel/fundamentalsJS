function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    songPlayList() {
      console.log(`${this.name}`);
    }
  }
  let arrayOfSongList = [];
  let songNums = array.shift();
  let typeSong = array.pop();
  for (let currSong of array) {
    let typeNameTime = currSong.split("_");
    let currentSong = new Song(typeNameTime[0], typeNameTime[1]);
    if (typeNameTime[0] === typeSong) {
      arrayOfSongList.push(currentSong);
    } else if (typeSong === "all") {
      arrayOfSongList.push(currentSong);
    }
  }
  for (let songList of arrayOfSongList) {
    songList.songPlayList();
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
