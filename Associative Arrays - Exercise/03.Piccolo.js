function piccolo(array) {
  let myParking = new Set();
  for (let car of array) {
    let [comm, plate] = car.split(", ");
    switch (comm) {
      case "IN":
        myParking.add(plate);
        break;
      case "OUT":
        myParking.delete(plate);
        break;
    }
  }
  if (myParking.size < 1) {
    return console.log("Parking Lot is Empty");
  }
  let sortedPlates = Array.from(myParking).sort();
  console.log(sortedPlates.join("\n"));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
