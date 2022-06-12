function nxNMatrix(num) {
  let matrix = [];
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num; j++) {
      row.push(num);
    }
    matrix.push(row.join(' '));
  }
  return matrix.join("\n");
}
console.log(nxNMatrix(5));
