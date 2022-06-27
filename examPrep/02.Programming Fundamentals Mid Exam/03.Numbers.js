function numbers(string) {
  let array = string.split(" ").map(Number);
  let sum = 0;
  for (let el of array) {
    sum += el;
  }

  let averageNum = sum / array.length;
  array = array
    .filter((el) => el > averageNum)
    .sort((a, b) => b - a)
    .slice(0, 5)
    .join(" ");
  return array.length > 1 ? array : "No";
}

console.log(numbers("10 20 30 40 50"));
console.log(numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51"));
console.log(numbers("1"));
console.log(numbers("-1 -2 -3 -4 -5 -6"));
