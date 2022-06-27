function theLift(array) {
  let wagonArr = array.join(" ").split(" ").map(Number);
  let pplWaiting = wagonArr.shift();
  let filledWagon = [];
  for (let i = 0; i < wagonArr.length; i++) {
    let currentWagon = wagonArr[i];
    let addPplToWagon = 0;
    for (let j = currentWagon; j < 4; j++) {
      if (pplWaiting > 0) {
        pplWaiting--;
        addPplToWagon++;
      } else {
        break;
      }
    }
    filledWagon.push(wagonArr[i] + addPplToWagon);
  }
  if (pplWaiting > 0 && filledWagon[filledWagon.length - 1] === 4) {
    console.log(`There isn't enough space! ${pplWaiting} people in a queue!`);
  } else if (pplWaiting === 0 && filledWagon[filledWagon.length - 1] < 4) {
    console.log(`The lift has empty spots!`);
  }
  console.log(filledWagon.join(" "));
}

// theLift(["15", "3 0 0 0 0"]);
// theLift(["20", "0 2 0"]);
theLift(["0", "4 4"]);
