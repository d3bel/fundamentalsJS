function maxNumber(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let currFirstNum = input[i];
        let isLarger = true;
        for(let j = i + 1; j < input.length; j++) {
            let currSecondNum = input[j];
            if(currFirstNum <= currSecondNum){
                isLarger = false;
            }
        }
        if(isLarger) newArr.push(currFirstNum)
    } console.log(newArr.join(' '))
}
maxNumber([1, 4, 3, 2]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
maxNumber([41, 41, 34, 20]);
