function blackFlag(array) {
  let days = Number(array[0]);
  let dailyPlunder = Number(array[1]);
  let plunderTarget = Number(array[2]);
  let plunderedTotal = 0;
  for (let i = 1; i <= days; i++) {
    plunderedTotal += dailyPlunder;
    if (i % 3 === 0) {
      plunderedTotal += dailyPlunder * 0.5;
    } 
    if (i % 5 === 0) {
      plunderedTotal -= plunderedTotal * 0.3;
    }
  }
  if (plunderedTotal >= plunderTarget) {
    console.log(`Ahoy! ${plunderedTotal.toFixed(2)} plunder gained.`);
  } else {
    let diff = 100 / (plunderTarget / plunderedTotal);
    console.log(`Collected only ${diff.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
