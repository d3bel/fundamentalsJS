function maxSequenceOfEqualElements(input) {
  let maxSequence = [];
    
    for (let i = 0; i < input.length; i++) {
        let currSequence = [];
        for (let j = i; j < input.length; j++) {
            if(input[i] === input[j]) {
                currSequence.push(input[i]);
            }
            else{
                break;
            }
        } if(currSequence.length > maxSequence.length){
            maxSequence = currSequence;
        }
    }
    console.log(maxSequence.join(' '));
}

// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
