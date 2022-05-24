function thePyramidOfKingDjoser(base, increment) {
  let stones = 0;
  let marbles = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let pyramidHight = 1;
  for (let i = base; i >= 1; i -= 2) {
    if (i > 2) {
      if (pyramidHight % 5 === 0) {
        lapisLazuli += (i * 4 - 4) * increment;
      } else {
        marbles += (i * 4 - 4) * increment;
      }
      pyramidHight++;
      stones += Math.pow(i - 2, 2) * increment;
    } else {
      gold += Math.pow(i, 2) * increment;
    }
  }
  pyramidHight *= increment;
  console.log(
    `Stone required: ${Math.ceil(stones)}\nMarble required: ${Math.ceil(
      marbles
    )}\nLapis Lazuli required: ${Math.ceil(
      lapisLazuli
    )}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(
      pyramidHight
    )}`
  );
}
thePyramidOfKingDjoser(23, 0.5);
