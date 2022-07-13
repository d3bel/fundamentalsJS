function legendaryFarming(string) {
  let newArray = string.split(" ");
  let colectedItems = new Map([
    ["shards", 0],
    ["fragments", 0],
    ["motes", 0],
  ]);
  let junkItems = new Map();
  for (let i = 0; i < newArray.length; i += 2) {
    let quantity = Number(newArray[i]);
    let material = newArray[i + 1].toLowerCase();
    if (colectedItems.has(material)) {
      colectedItems.set(material, colectedItems.get(material) + quantity);
      if (colectedItems.get(material) >= 250) {
        if (material === "shards") {
          colectedItems.set(material, colectedItems.get(material) - 250);
          console.log("Shadowmourne obtained!");
          break;
        } else if (material === "fragments") {
          colectedItems.set(material, colectedItems.get(material) - 250);
          console.log("Valanyr obtained!");
          break;
        } else if (material === "motes") {
          colectedItems.set(material, colectedItems.get(material) - 250);
          console.log("Dragonwrath obtained!");
          break;
        }
      }
    } else if (!junkItems.has(material)) {
      junkItems.set(material, quantity);
    } else {
      junkItems.set(material, junkItems.get(material) + quantity);
    }
  }
  let sortingItems = Array.from(colectedItems.entries()).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  let sortJunk = Array.from(junkItems.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sortingItems.forEach((item) => {
    console.log(`${item[0]}: ${item[1]}`);
  });
  sortJunk.forEach((item) => {
    console.log(`${item[0]}: ${item[1]}`);
  });
}
legendaryFarming("0 Motes 5 stones 5 Shards 6 leathers 250 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
