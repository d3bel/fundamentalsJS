function guineaPig(array) {
  let foodQuantity = Number(array[0]) * 1000;
  let heyQuantity = Number(array[1]) * 1000;
  let coverQuantity = Number(array[2]) * 1000;
  let guineaPigWeight = Number(array[3]) * 1000;
  let dailyConsumption = 300;
  let monthDuration = 30;
  for (let i = 1; i <= monthDuration; i++) {
    if (foodQuantity <= 0) {
      return console.log("Merry must go to the pet store!");
    } else {
      foodQuantity -= dailyConsumption;
      if (i % 3 === 0) {
        coverQuantity -= guineaPigWeight / 3;
        if (coverQuantity <= 0) {
          return console.log("Merry must go to the pet store!");
        }
      }
      if (i % 2 == 0) {
        heyQuantity -= foodQuantity * 0.05;
        if (heyQuantity <= 0) {
          return console.log("Merry must go to the pet store!");
        }
      }
    }
  }
  if (foodQuantity <= 0) {
    return console.log("Merry must go to the pet store!");
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(
      2
    )}, Hay: ${(heyQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`
  );
}
// guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
