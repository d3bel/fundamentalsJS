function triangleOfNumbers(number){
    for (let i = 1; i <= number; i++){
        let currentLine = "";
        for (let j = 1; j <= i; j++){
            currentLine += i;
            if(j !== i){
                currentLine += " ";
            }
        } console.log(currentLine)
    }
}
triangleOfNumbers(6)