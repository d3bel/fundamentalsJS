function cutAndReverse(str) {
  let strL = str.length / 2;
  let firstHalf = str.slice(0, strL).split("").reverse().join("");
  let secondHalf = str
    .slice(firstHalf.length)
    .split("")
    .reverse()
    .join("");
  console.log(`${firstHalf}\n${secondHalf}`);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
