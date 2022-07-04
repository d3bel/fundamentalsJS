function catalogue(array) {
  let newArray = [];
  array.forEach((product) => {
    let currentProduct = product.split(" : ");
    let prodcut = {
      name: currentProduct[0],
      price: Number(currentProduct[1]),
    };
    newArray.push(prodcut);
  });
  newArray.sort((a, b) => a.name.localeCompare(b.name));
  let alphabeticalList;
  newArray.forEach((product) => {
    if (product.name.charAt(0).toUpperCase() === alphabeticalList) {
      console.log(`  ${product.name}: ${product.price}`);
    } else {
      alphabeticalList = product.name.charAt(0).toUpperCase();
      console.log(`${alphabeticalList}\n  ${product.name}: ${product.price}`);
    }
  });
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
