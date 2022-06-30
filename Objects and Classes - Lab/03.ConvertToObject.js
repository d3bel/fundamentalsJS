function convertToObject(jsonStr) {
  let input = JSON.parse(jsonStr);
  for (let key of Object.keys(input)) {
    console.log(`${key}: ${input[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
