function printAndSum(startNum, endNum) {
    let sumOfNums = 0;
    let byEachNum = "";
    for (let i = startNum; i <= endNum; i++) {
        byEachNum += `${i} `;
        sumOfNums += i;
    }
    console.log(byEachNum)
    console.log(`Sum: ${sumOfNums}`);
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)