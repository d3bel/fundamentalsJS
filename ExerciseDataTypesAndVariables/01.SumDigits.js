function sumDigits(num){
    let numArray = num.toString().split('');
    let sum = 0;
        for (let i = 0; i < numArray.length; i++) {
            sum += Number(numArray[i]);
        }
        console.log(sum);
}
sumDigits(245678)
sumDigits(97561)