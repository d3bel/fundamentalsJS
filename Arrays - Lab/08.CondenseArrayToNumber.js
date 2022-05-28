function condenseArrayToNumber(input) {
    let condensed = [];
    for(let num of input) {
        condensed.push(num);
    }
    while(condensed.length > 1){
        let temporary = [];
        for(let i = 0; i < condensed.length - 1; i++){
            temporary.push(condensed[i] + condensed[i + 1]);
        }
        condensed = temporary;
    }
    console.log(condensed[0])
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
