function bitcoinMining(input) {
  let goldPricePerGr = 67.51;
  let bitCoinPrice = 11949.16;
  let moneyPerDay = 0;
  let totalMoney = 0;
  let bitCoinCount = 0;
  let count = 0;
  let dayOfFirstPurchased = 0;
  for (let index = 0; index < input.length; index++) {
    let currentShiftGold = Number(input[index]);
    count++;
    if (count % 3 === 0) {
      currentShiftGold *= 0.7;
    }
    moneyPerDay = currentShiftGold * goldPricePerGr;
    totalMoney += moneyPerDay;
    if (totalMoney >= bitCoinPrice) {
      if (bitCoinCount <= 0) {
        dayOfFirstPurchased = count;
      }
      let currentBitCoin = Math.floor(totalMoney / bitCoinPrice);
      bitCoinCount += currentBitCoin;
      totalMoney -= currentBitCoin * bitCoinPrice;
    }
  }
  if (bitCoinCount <= 0) {
    console.log(
      `Bought bitcoins: ${bitCoinCount}\nLeft money: ${totalMoney.toFixed(
        2
      )} lv.`
    );
  } else {
    console.log(
      `Bought bitcoins: ${bitCoinCount}\nDay of the first purchased bitcoin: ${dayOfFirstPurchased}\nLeft money: ${totalMoney.toFixed(
        2
      )} lv.`
    );
  }
}
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
bitcoinMining([100, 200, 300]);
