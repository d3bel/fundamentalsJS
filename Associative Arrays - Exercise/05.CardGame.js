function cardGame(array) {
  let playerDecks = new Map();
  let powerCard = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let typeCard = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  array.forEach((eachPlayer) => {
    let [name, deck] = eachPlayer.split(": ");
    deck = deck.split(", ");
    if (!playerDecks.has(name)) {
      playerDecks.set(name, new Set());
    }
    for (let card of deck) {
      playerDecks.get(name).add(card);
    }
  });
  for (let [plrName, plrDeck] of playerDecks) {
    let totalPoints = 0;
    for(let eachCard of plrDeck){
        let currentCard = eachCard.split("");
        let type = currentCard.pop();
        let power = currentCard.join("")
        let cardPower = powerCard[power];
        let cardType = typeCard[type]
        totalPoints += cardPower * cardType;
    }
    console.log(`${plrName}: ${totalPoints}`);
  }
}
// cardGame([
//   "Peter: 2C, 4H, 9H, AS, QS",
//   "Tomas: 3H, 10S, JC, KD, 5S, 10S",
//   "Andrea: QH, QC, QS, QD",
//   "Tomas: 6H, 7S, KC, KD, 5S, 10C",
//   "Andrea: QH, QC, JS, JD, JC",
//   "Peter: JD, JD, JD, JD, JD, JD",
// ]);
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
