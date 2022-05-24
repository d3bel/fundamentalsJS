function amazingNumbers(nums) {
  nums = nums.toString();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += Number(nums[i]);
  }
  let sum = result.toString().includes("9");
  if (!sum) {
    console.log(`${nums} Amazing? False`);
  }
   else {
    console.log(`${nums} Amazing? True`);
  }
}
amazingNumbers(1233);
amazingNumbers(999);
