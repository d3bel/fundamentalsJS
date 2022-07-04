function makeDictionary(array) {
  let newObject = {};
  for (let object of array) {
    let input = JSON.parse(object);
    let key = Object.keys(input)[0];
    let value = Object.values(input)[0];
    newObject[key] = value;
  }
  let newArr = [];
  for (let curr in newObject) {
    newArr.push({ [curr]: newObject[curr] });
  }
  newArr.sort((a, b) => {
    if (Object.keys(a) > Object.keys(b)) {
      return 1;
    } else if (Object.keys(a) < Object.keys(b)) {
      return -1;
    }
  });
  newArr.forEach((el) => {
    let key = Object.keys(el).join();
    let value = el[key];
    console.log(`Term: ${key} => Definition: ${value}`);
  });
}
makeDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
