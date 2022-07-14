function garage(array) {
  let garageList = {};
  array.forEach((cellInfo) => {
    let info = cellInfo.split(" - ");
    let cellNum = info.shift();
    if (!garageList.hasOwnProperty(cellNum)) {
      garageList[cellNum] = {};
    }
    garageList[cellNum][info] = info;
  });
  Object.keys(garageList).forEach((num) => {
    console.log(`Garage № ${num}`)
    for (let car in garageList[num]) {
      let repOutput = car.replace(":", " -").replace(":", " -").replace(":", " -").replace(":", " -");
      console.log(`--- ${repOutput}`);
    }
  });
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
// garage([
//   "1 - color: green, fuel type: petrol",
//   "1 - color: dark red, manufacture: WV",
//   "2 - fuel type: diesel",
//   "3 - color: dark blue, fuel type: petrol",
// ]);
