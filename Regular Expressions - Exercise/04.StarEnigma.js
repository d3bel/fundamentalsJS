function starEnigma(input) {
  let messageCount = Number(input.shift());
  let messages = 0;
  let decodedMessage = {};
  while (messages < messageCount) {
    let currMsg = input.shift();
    let msgLength = 0;
    if (currMsg.match(/[star]/gi) !== null) {
      msgLength = currMsg.match(/[star]/gi).length;
    }
    let msgPattern =
      /@(?<name>[A-Za-z]+)[^@\-!:>]*?:(?<population>\d+)[^@\-!:>]*?!(?<attType>[AD])![^@\-!:>]*?->(?<soldiers>\d+)/g;
    currMsg = currMsg
      .split("")
      .map((letter) => letter.charCodeAt(0) - msgLength);
    currMsg = currMsg.map((code) => String.fromCharCode(code)).join("");
    let validMSG;
    while ((validMSG = msgPattern.exec(currMsg)) !== null) {
      let name = validMSG.groups["name"];
      let population = validMSG.groups["population"];
      let attType = validMSG.groups["attType"];
      let soldiersCount = validMSG.groups["soldiers"];
      decodedMessage[name] = [population, attType, soldiersCount];
    }
    messages++;
  }
  let attackCount = [];
  let destroyedCount = [];
  for (let count in decodedMessage) {
    if (decodedMessage[count][1] === "A") {
      attackCount.push(count);
    } else if (decodedMessage[count][1] === "D") {
      destroyedCount.push(count);
    }
  }
  let attackedSortByName = attackCount.sort((a, b) => a.localeCompare(b));
  let destroyedSortByName = destroyedCount.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attackCount.length}`);
  for (let name of attackedSortByName) {
    console.log(`-> ${name}`);
  }
  console.log(`Destroyed planets: ${destroyedCount.length}`);
  for (let name of destroyedSortByName) {
    console.log(`-> ${name}`);
  }
}
// starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
