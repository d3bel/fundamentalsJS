function phoneShop(array) {
  let listOfPhones = array.shift().split(", ");
  for (let command of array) {
    if (command !== "End") {
      command = command.split(" - ");
      let currentAction = command.shift();
      let currentPhone = command.shift();
      switch (currentAction) {
        case "Add":
          if (listOfPhones.includes(currentPhone)) {
            continue;
          } else {
            listOfPhones.push(currentPhone);
          }
          break;
        case "Remove":
          if (listOfPhones.includes(currentPhone)) {
            let removedPhone = listOfPhones.splice(
              listOfPhones.indexOf(currentPhone),
              1
            );
          } else {
            continue;
          }
          break;
        case "Bonus phone":
          let bonusPhone = currentPhone.split(":");
          let oldPhone = bonusPhone[0];
          let newPhone = bonusPhone[1];
          if (listOfPhones.includes(oldPhone)) {
            listOfPhones.splice(
              listOfPhones.indexOf(oldPhone) + 1,
              0,
              newPhone
            );
          } else {
            continue;
          }
          break;
        case "Last":
          if (listOfPhones.includes(currentPhone)) {
            let phone = listOfPhones.splice(
              listOfPhones.indexOf(currentPhone),
              1
            );
            listOfPhones.push(phone);
          } else{
            continue;
          }
          break;
      }
    } else{
        console.log(listOfPhones.join(", "));
    }
  }
}
phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);
phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
