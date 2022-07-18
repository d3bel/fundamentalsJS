function deserializeString(array) {
  let output = [];
  for (let arr of array) {
    if (arr != "end") {
      let [currLetter, indexes] = arr.split(":");
      indexes = indexes.split("/").map((index) => Number(index));
      for (let index of indexes) {
        output[index] = currLetter;
      }
    }
  }
  console.log(output.join(""));
}
deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
