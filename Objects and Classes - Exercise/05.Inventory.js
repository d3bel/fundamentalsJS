function inventory(array) {
  let heroArr = [];
  array.forEach((hero) => {
    let [heroName, heroLevel, heroItems] = hero.split(" / ");
    heroLevel = Number(heroLevel);
    let heroObj = {
      hero: heroName,
      level: heroLevel,
      items: heroItems,
    };
    heroArr.push(heroObj);
  });
  let sortByAccendingLevel = heroArr.sort((a, b) => {
    return a.level - b.level;
  });
  sortByAccendingLevel.forEach((hero) => {
    console.log(
      `Hero: ${hero.hero}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
