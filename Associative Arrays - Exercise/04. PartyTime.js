function partyTime(array) {
  let guestList = [];
  let geustsNotAraived = [];
  let partyIndex = array.indexOf("PARTY");
  for (let codeList of array) {
    if (codeList === "PARTY") {
      break;
    }
    guestList.push(codeList);
  }
  for (let i = partyIndex + 1; i < array.length; i++) {
    geustsNotAraived.push(array[i]);
  }
  for (let guest of geustsNotAraived) {
    if (guestList.includes(guest)) {
      guestList.splice(guestList.indexOf(guest), 1);
    }
  }
  let printLineVip = [];
  let printLineRest = [];
  guestList.forEach((notCome) => {
    let typeOfGuest = Number(notCome[0]);
    if (!isNaN(typeOfGuest)) {
      printLineVip.push(notCome);
    } else {
      printLineRest.push(notCome);
    }
  });
  console.log(`${printLineVip.length + printLineRest.length}`);
  printLineVip.forEach((allGuest) => {
    console.log(allGuest);
  });
  printLineRest.forEach((allGuest) => {
    console.log(allGuest);
  });
}
partyTime([
  "7IK9Yo0h",
  "Ce8vwPmE",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
