function adAstra(input) {
  let listOfItems = [];
  let totalFoodToLast = 0;
  let totalNutrition = 0;
  let pattern =
    /(#|\|)(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g;

  let currInput = input.join("");
  let validItem;
  while ((validItem = pattern.exec(currInput)) !== null) {
    let currItem = validItem.groups["item"];
    let date = validItem.groups["expDate"];
    let nutrition = Number(validItem.groups["cal"]);
    let itemInfo = { item: currItem, date: date, cal: nutrition};
    listOfItems.push(itemInfo);
    totalNutrition += nutrition;
  }

  totalFoodToLast = Math.trunc(totalNutrition / 2000);
  console.log(`You have food to last you for: ${totalFoodToLast} days!`);
  for (let items of listOfItems) {
    console.log(
      `Item: ${items.item}, Best before: ${items.date}, Nutrition: ${items.cal}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
