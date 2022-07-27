function fancyBarcodes(input) {
  let countBarcodes = input.shift();
  let output = [];
  let pattern = /(@[#]+)[A-Z][A-Za-z0-9]{4,}[A-Z](@[#]+)/g
  for (let i = 0; i < countBarcodes; i++) {
    if (input[i].match(pattern)) {
      if (input[i].match(/\d+/g)) {
        let currentCode = input[i].match(/[0-9]+/g);
        output.push(`Product group: ${currentCode.join("")}`);
      } else {
        output.push(`Product group: 00`);
      }
    } else {
      output.push("Invalid barcode");
    }
  }
  console.log(output.join("\n"));
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
