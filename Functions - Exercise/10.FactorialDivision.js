function factorialDivision(intOne, intTwo) {
    function factorial(num){
        let factorial = 1;
        for (let i = factorial; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
    return (factorial(intOne) / factorial(intTwo)).toFixed(2);
}
console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));
// console.log(factorialDivision());
