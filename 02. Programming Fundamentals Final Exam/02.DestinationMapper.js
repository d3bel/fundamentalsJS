function destinationMapper(input) {
  let destinations = [];
  let totalPoints = 0;
  let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
  let validDest;
  while ((validDest = pattern.exec(input)) !== null) {
    let currDest = validDest.groups["destination"];
    totalPoints += currDest.length;
    destinations.push(currDest);
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${totalPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
