function travelTime(array) {
  let travelList = {};
  array.forEach((list) => {
    let [country, town, price] = list.split(" > ");
    price = Number(price);
    if (!travelList.hasOwnProperty(country)) {
      travelList[country] = {};
    }
    if (!travelList[country].hasOwnProperty(town)) {
      travelList[country][town] = Number.MAX_SAFE_INTEGER;
    }
    if (travelList[country].hasOwnProperty(town)) {
      if (travelList[country][town] > price) {
        travelList[country][town] = price;
      }
    }
  });
  let sortedCountries = Object.keys(travelList).sort((a, b) =>
    a.localeCompare(b)
  );
  let printLine = "";
  for (let country of sortedCountries) {
    printLine = country + " -> ";
    let sortByPrice = Object.keys(travelList[country]).sort((price1, price2) => travelcost(price1, price2, travelList, country));
    for (let town of sortByPrice) {
      printLine += `${town} -> ${travelList[country][town]} `;
    }
    printLine += "\n";
    console.log(printLine.trim());
}
function travelcost(town1, town2, travelList, country){
    let priceOne = travelList[country][town1];
    let priceTwo = travelList[country][town2];
    return priceOne - priceTwo
}
}
// function travelTime(input) {
//     let destinations = {};
 
//     for (let i = 0; i < input.length; i++) {
//         let [country, town, price] = input[i].split(" > ").filter(e => e !== "");
//         price = +price;
//         town = town[0].toUpperCase() + town.slice(1);
 
//         if (!destinations.hasOwnProperty(country)) {
//             destinations[country] = {};
//         }
//         if (!destinations[country].hasOwnProperty(town)) {
//             destinations[country][town] = price;
//         }
//         let prevPrice = destinations[country][town];
//         if (prevPrice > price) {
//             destinations[country][town] = price;
//         }
//     }
 
//     let orderedCountries = Object.keys(destinations).sort((a,b) => a.localeCompare(b));
//     let result = "";
//     for (let country of orderedCountries) {
//         result += country + " -> ";
//         let sortedPrices = Object.keys(destinations[country]).sort((a, b) => travelCost(a, b, destinations, country));
//         for (let town of sortedPrices) {
//             result += `${town} -> ${destinations[country][town]} `;
//         }
//         result += "\n";
//     }
//     console.log(result);
 
//     function travelCost(town1, town2, destination, country) {
//         let priceOne = destination[country][town1];
//         let priceTwo = destination[country][town2];
 
//         return priceOne - priceTwo
//     }
// }
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
console.log("-----------------------");
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
