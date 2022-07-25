function furniture(input) {
  let pattern = />>(?<furnituer>\w+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
  let totalPrice = 0;
  let validFur;
  console.log("Bought furniture:");
  while ((validFur = pattern.exec(input)) !== null) {
    let type = validFur.groups["furnituer"];
    console.log(type);
    let price = Number(validFur.groups["price"]);
    let quantity = Number(validFur.groups["quantity"]);
    totalPrice += price * quantity;
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
// furniture([
//   ">>Laptop<<312.2323!3",
//   ">>TV<<300.21314!5",
//   ">Invalid<<!5",
//   ">>TV<<300.21314!20",
//   ">>Invalid<!5",
//   ">>TV<<30.21314!5",
//   ">>Invalid<<!!5",
//   "Purchase",
// ]);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
