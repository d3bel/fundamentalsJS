function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;
  let brokenHelmetCount = 0;
  let brokenShieldCount = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      brokenHelmetCount++;
      totalExpenses += helmetPrice;
      if (i % 3 === 0 && brokenHelmetCount % 3 === 0) {
        brokenShieldCount++;
        totalExpenses += shieldPrice + swordPrice;
        if (brokenShieldCount % 2 === 0) {
          totalExpenses += armorPrice;
        }
      } else if (i % 3 === 0) {
        totalExpenses += swordPrice;
      }
    } else if (i % 3 === 0) {
      totalExpenses += swordPrice;
    }
  }
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);

// As a gladiator, Peter has to repair his broken equipment when he loses a fight.
// His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count.
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired.
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.

// •	The first parameter - lost fights count - is an integer in the range [0, 1000].
// •	The second parameter - helmet price - is the floating-point number in the range [0, 1000].
// •	The third parameter - sword price - is the floating-point number in the range [0, 1000].
// •	The fourth parameter - shield price - is the floating-point number in the range [0, 1000].
// •	The fifth parameter - armor price - is the floating-point number in the range [0, 1000].
