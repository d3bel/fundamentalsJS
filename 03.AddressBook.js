function addressBook(array) {
  let addressList = {};
  array.forEach((address) => {
    let [name, road] = address.split(":");
    addressList[name] = road;
  });
  let sortedList = Object.keys(addressList).sort(
    (name, nextName) => {
      return name.localeCompare(nextName);
    }
  );
  for (let eachAddress of sortedList) {
    console.log(`${eachAddress} -> ${addressList[eachAddress]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
console.log("--------------------------");
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
