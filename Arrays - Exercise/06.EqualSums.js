function equalSums(input){
    let output = 'no'
    for (let i = 0; i < input.length; i++) {
        let leftSide = 0;
        let rightSide = 0;
        for (let j = 0; j < i; j++) {
            leftSide += input[j];
        }
        for (let k = i + 1; k < input.length; k++) {
            rightSide += input[k];
        }
        if(leftSide === rightSide){
            output = i;
        }
    }
    console.log(output);
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1, 2, 3])
equalSums([1])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])