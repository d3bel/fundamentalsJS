function softUniBarIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^.,|$]*<(?<product>[\w]+)>[^.,|$]*\|(?<quantity>[\d]+)\|[^.,|$]*?(?<price>[\d]+[\.\d]+)\$/g;
  let validCustomers;
  let totalIncome = 0;
  let output = [];
  while ((validCustomers = pattern.exec(input)) !== null) {
    let customerName = validCustomers.groups["name"];
    let product = validCustomers.groups["product"];
    let totalPrice =
      Number(validCustomers.groups["price"]) *
      Number(validCustomers.groups["quantity"]);
    totalIncome += totalPrice;
    output.push(customerName, product, totalPrice);
  }
  for (let i = 0; i < output.length; i += 3) {
    let name = output[i];
    let product = output[i + 1];
    let price = output[i + 2];

    console.log(`${name}: ${product} - ${price.toFixed(2)}`);
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
