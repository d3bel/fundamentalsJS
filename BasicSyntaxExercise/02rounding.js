function rounding(number, precision){
    number = Number(number);
    precision = Number(precision);
    if (precision > 15){
        precision = 15;
    }
    number = number.toFixed(precision);
    console.log(parseFloat(number));
}
rounding(10.5,3)