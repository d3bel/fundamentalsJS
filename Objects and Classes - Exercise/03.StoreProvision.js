function storeProvision(inStock, deliveryStock) {
  let shopStocks = {};
  let lengthOfInStock = inStock.length;
  let lengthOfDeliveryStock = deliveryStock.length;
  for (let i = 0; i < lengthOfInStock; i += 2) {
    let currentProduct = inStock[i];
    shopStocks[currentProduct] = Number(inStock[i + 1]);
  }
  for (let i = 0; i < lengthOfDeliveryStock; i += 2) {
    let currentProduct = deliveryStock[i];
    if (shopStocks.hasOwnProperty(currentProduct)) {
      shopStocks[currentProduct] += Number(deliveryStock[i + 1]);
    } else {
      shopStocks[currentProduct] = Number(deliveryStock[i + 1]);
    }
  }
  for (let printProduct in shopStocks) {
    console.log(`${printProduct} -> ${shopStocks[printProduct]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
// storeProvision(
//   ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
//   ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
// );
