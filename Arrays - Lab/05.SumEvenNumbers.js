function sumEvenNumbers(input) {
    for(let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    } 
    let summary = 0;
    for(let nums of input) {
        if(nums % 2 === 0) {
            summary += nums;
        }
    }
    console.log(summary)
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
