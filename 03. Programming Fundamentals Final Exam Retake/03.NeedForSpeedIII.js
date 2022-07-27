function needForSpeedIII(input) {
  let numOfCars = input.shift();
  let carList = {};
  for (let i = 0; i < numOfCars; i++) {
    let [model, mileage, fuel] = input.shift().split("|");
    carList[model] = [Number(mileage), Number(fuel)];
  }
  for (let currentCar of input) {
    if (currentCar !== "Stop") {
      let [command, model, value1, value2] = currentCar.split(" : ");
      switch (command) {
        case "Drive":
          if (carList[model][1] >= value2) {
            carList[model][0] += Number(value1);
            carList[model][1] -= Number(value2);
            console.log(
              `${model} driven for ${value1} kilometers. ${value2} liters of fuel consumed.`
            );
          } else {
            console.log("Not enough fuel to make that ride");
          }
          if (carList[model][0] >= 100000) {
            console.log(`Time to sell the ${model}!`);
            delete carList[model];
          }
          break;

        case "Refuel":
          value1 = Number(value1);
          if (carList[model][1] + value1 <= 75) {
            carList[model][1] += value1;
            console.log(`${model} refueled with ${value1} liters`);
          } else {
            let diff = carList[model][1] - 75 + value1;
            carList[model][1] = 75;
            console.log(`${model} refueled with ${value1 - diff} liters`);
          }
          break;

        case "Revert":
          value1 = Number(value1);
          if (carList[model][0] - value1 < 10000) {
            carList[model][0] = 10000;
          } else {
            carList[model][0] -= value1;
            console.log(`${model} mileage decreased by ${value1} kilometers`);
          }
          break;
      }
    } else {
      for (let car in carList) {
        console.log(
          `${car} -> Mileage: ${carList[car][0]} kms, Fuel in the tank: ${carList[car][1]} lt.`
        );
      }
    }
  }
}
// needForSpeedIII([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);
needForSpeedIII([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
