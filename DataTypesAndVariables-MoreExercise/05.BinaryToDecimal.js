function binaryToDecimal(byte) {
  byte = byte.split("");
  let asNum = 0;
  let decimal = 0;
  for (let i = 0; i < byte.length; i++) {
    asNum = Number(byte[i]);
    decimal = decimal * 2 + asNum;
  }
  console.log(decimal);
}
binaryToDecimal("00001001");
binaryToDecimal("11110000");
