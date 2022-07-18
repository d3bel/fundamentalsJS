function asciiSumator(array) {
  let firstEl = array[0];
  firstEl = firstEl.charCodeAt(0);
  let secondEl = array[1];
  secondEl = secondEl.charCodeAt(0);
  let string = array[2];
  let sum = 0;
  let maxNum = Math.max(firstEl, secondEl);
  let minNum = Math.min(firstEl, secondEl)
  for(let i = 0; i <string.length; i++) {
      let currEl = string.charCodeAt(i);
      if(currEl < maxNum && currEl > minNum) {
          sum += currEl;
        }
    }
    console.log(sum);
}
asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["?", "E", "@ABCEF"]);
