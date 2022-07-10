function storage(array) {
  let storageList = new Map();
  array.forEach((items) => {
    let [item, quantity] = items.split(" ");
    quantity = Number(quantity)
    if(!storageList.has(item)){
        storageList.set(item, Number(quantity));
    } else {
        let currQuantity = storageList.get(item) + quantity;
        storageList.set(item, currQuantity);
    }
  });
  for (let eachItem of storageList){
    console.log(`${eachItem[0]} -> ${eachItem[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
