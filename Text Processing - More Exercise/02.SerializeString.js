function serializeString(array) {
  let newString = array[0];
  let newObj = {};
  for (let i = 0; i < newString.length; i++) {
    if (newObj.hasOwnProperty(newString[i])) {
      newObj[newString[i]] += `/${i}`;
    } else {
      newObj[newString[i]] = `${i}`;
    }
  }
  for (let el in newObj) {
    console.log(`${el}:${newObj[el]}`);
  }
}
// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
