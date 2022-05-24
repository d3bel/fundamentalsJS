function foreignLanguages(name) {
  if (name === "England" || name === "USA") {
    console.log("English");
  } else if (
    name === "Spain" ||
    name === "Mexico" ||
    name === "Argentina"
  ) {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}
foreignLanguages("England")
