function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        let currentResult = i * num;
        console.log(`${num} X ${i} = ${currentResult}`);
    }
}
multiplicationTable(2)