function reverseAnArrayOfNumbers(num, input) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        newArray += `${input[i]} `;
    }
    newArray = newArray.split(' ').reverse().join(' ');
    console.log(`${newArray}`);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])