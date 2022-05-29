function mergeArrays(arr1, arr2) {
  let printLine = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
      let temp = Number(arr1[i]);
      let temp2 = Number(arr2[i]);
      printLine.push(temp + temp2);
    } else {
      printLine.push(arr1[i] + arr2[i]);
    }
  }
  console.log(printLine.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
