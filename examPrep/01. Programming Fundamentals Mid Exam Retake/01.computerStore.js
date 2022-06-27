function computerStore(input) {
  let type = input.pop().toLowerCase();
  let priceExlTax = 0;
  let totalTax = 0;
  let totalInclTax = 0;
  for (price of input) {
    const currentPrice = Number(price);

    if (price === "special" || price === "regular") {
      break;
    }

    if (price > 0) {
      priceExlTax += currentPrice;
    } else {
      console.log("Invalid price!");
      continue;
    }
  }
  if (priceExlTax === 0) {
    return console.log("Invalid order!");
  }

  totalTax = priceExlTax * 0.2;
  totalInclTax = totalTax + priceExlTax;

  if (type === "special") {
    totalInclTax *= 0.9;
  }
  console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceExlTax.toFixed(
    2
  )}$\nTaxes: ${totalTax.toFixed(
    2
  )}$\n-----------\nTotal price: ${totalInclTax.toFixed(2)}$
  `);
}
//   let isSpecial = false;
//   let rawPrice = input[index];
//   while (rawPrice !== "special" && rawPrice !== "regular") {
//     let currentPrice = Number(input[index++]);
//     if (currentPrice <= 0) {
//       console.log("Invalid price!");
//       continue;
//     }
//     priceExlTax += currentPrice;
//     totalTax += currentPrice * 0.2;
//     totalInclTax += currentPrice * 1.2;
//     rawPrice = input[index];
//     if (rawPrice === "special") {
//       isSpecial = true;
//     }
//   }
//   if (isSpecial) {
//     totalInclTax *= 0.9;
//   }
//   if (totalInclTax <= 0) {
//     console.log("Invalid order!");
//   } else if(rawPrice === 'special' || rawPrice === 'regular'){
// console.log(`Congratulations you've just bought a new computer!
//      Price without taxes: ${priceExlTax.toFixed(2)}$
//      Taxes: ${totalTax.toFixed(2)}$
//      -----------
//      Total price: ${totalInclTax.toFixed(2)}$
//      `);
//   }
// }
// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// computerStore(["regular"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);

// Write a program that prints you a receipt for your new computer. You will receive the parts
// ' prices (without tax) until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive.
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until command "special" or "regular":
// Output
// •	The receipt should be in the following format:
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point!
//  The discount is applied only on the total price. Discount is only applicable to the final price!
