function sumOfOddNumbers(num){
    let totalSum = 0;
    let counter = 0;
    for (let i = 1; i; i++){
        if(i % 2 === 1 && counter < num){
            console.log(i);
            totalSum += i
            counter++;
        } else if(counter === num){
             break;
        }
    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(6)