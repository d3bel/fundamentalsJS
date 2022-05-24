function calculator(num1, str, num2) {
  switch (str) {
    case "+":
      console.log((num1 + num2).toFixed(2));
      break;
    case "-":
      console.log((num1 - num2).toFixed(2));
      break;
    case "/":
      console.log((num1 / num2).toFixed(2));
      break;
    case "*":
      console.log((num1 * num2).toFixed(2));
      break;
  }
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
