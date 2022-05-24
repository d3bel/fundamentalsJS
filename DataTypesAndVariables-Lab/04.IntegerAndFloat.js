function integerAndFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
        if(result % 1 === 0){
            result += ' - Integer';
        } else {
            result += ' - Float';
        }
        console.log(result);
}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)