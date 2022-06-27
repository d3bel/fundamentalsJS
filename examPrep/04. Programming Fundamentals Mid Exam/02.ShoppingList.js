function shoppingList(array) {
  let productsList = array.shift().split("!");
  for (let command of array) {
    if (command !== "Go Shopping!") {
      command = command.split(" ");
      let currCommand = command.shift();
      let currProduct = command.shift();
      switch (currCommand) {
        case "Urgent":
          if (productsList.includes(currProduct)) {
            continue;
          } else {
            productsList.unshift(currProduct);
          }
          break;
        case "Unnecessary":
          if (productsList.includes(currProduct)) {
            productsList.splice(productsList.indexOf(currProduct), 1);
          } else {
            continue;
          }
          break;
        case "Correct":
          let newItem = command.shift();
          if (productsList.includes(currProduct)) {
            productsList.splice(productsList.indexOf(currProduct), 1, newItem);
          }
          break;
        case "Rearrange":
          if (productsList.includes(currProduct)) {
            let removedItem = productsList.splice(
              productsList.indexOf(currProduct),
              1
            );
            productsList.push(removedItem);
          }
          break;
      }
    } else {
      console.log(productsList.join(", "));
    }
  }
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
