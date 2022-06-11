function orders(products, quantity) {
  let coffee = 1.5;
  let water = 1.0;
  let coke = 1.4;
  let snacks = 2.0;
  switch (products) {
    case "coffee":
      return (coffee * quantity).toFixed(2);
      break;
    case "water":
      return (water * quantity).toFixed(2);
      break;
    case "coke":
      return (coke * quantity).toFixed(2);
      break;
    case "snacks":
      return (snacks * quantity).toFixed(2);
      break;
  }
}
console.log(orders("water", 5));
console.log(orders("coffee", 2));

// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
