function spiceMustFlow(yield) {
  let totalDays = 0;
  let totalSpice = 0;
  let workersConsumesPerDay = 26;
  while (100 <= yield) {
    totalSpice += (yield - workersConsumesPerDay);
    totalDays++;
    yield -= 10;
    if (totalSpice <= workersConsumesPerDay) {
      break;
    }
  }
  totalSpice -= workersConsumesPerDay;
  if(totalSpice < 1){
      totalSpice = 0;
  }
  console.log(`${totalDays}\n${totalSpice}`);
}
spiceMustFlow(111);
spiceMustFlow(450);
