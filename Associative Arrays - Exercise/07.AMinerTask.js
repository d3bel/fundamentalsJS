function minerTask(array) {
  let resources = new Map();
  let pairs = [];
  for (let i = 0; i < array.length; i += 2) {
    pairs.push([array[i], array[i + 1]]);
  }
  pairs.forEach((resQuant) => {
    let [currRes, currQuant] = resQuant;
    currQuant = Number(currQuant);
    if (!resources.has(currRes)) {
      resources.set(currRes, currQuant);
    } else {
      resources.set(currRes, resources.get(currRes) + currQuant);
    }
  });
  for (let [res, quantity] of resources) {
    console.log(`${res} -> ${quantity}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log("----------------------");
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
