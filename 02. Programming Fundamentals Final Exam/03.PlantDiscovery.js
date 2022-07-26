function plantDiscovery(input) {
  let numOfPlants = input.shift();
  let plantsList = {};
  for (let i = 0; i < numOfPlants; i++) {
    let currentPlant = input.shift();
    let [plantName, rarity] = currentPlant.split("<->");
    plantsList[plantName] = {
      rarity: rarity,
      rating: [],
    };
  }
  while (input[0] != "Exhibition") {
    let [command, plantInfo] = input.shift().split(": ");
    let [plantName, value] = plantInfo.split(" - ");
    if (plantsList.hasOwnProperty(plantName)) {
      switch (command) {
        case "Rate":
          plantsList[plantName].rating.push(Number(value));
          break;
        case "Update":
          plantsList[plantName].rarity = value;
          break;
        case "Reset":
          plantsList[plantName].rating = [];
          break;
      }
    } else {
      console.log("error");
    }
  }
  console.log("Plants for the exhibition:");
  for (let [eachPlant, arr] of Object.entries(plantsList)) {
    let avgRating = 0;
    if (arr.rating.length > 0) {
      avgRating = arr.rating.reduce((a, b) => a + b) / arr.rating.length;
    } else {
      avgRating = 0;
    }
    console.log(
      `- ${eachPlant}; Rarity: ${
        plantsList[eachPlant].rarity
      }; Rating: ${avgRating.toFixed(2)}`
    );
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
