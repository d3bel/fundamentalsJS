function substring(string, index, count) {
  let endIndex = index + count;
  let result = string.substring(index, endIndex);
  console.log(result);
}
substring("SkipWord", 4, 7);
