function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function divide(number1, number2){
  return number1/number2;
}

function multiplication(number1, number2){
  return number1*number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = multiplication(number1, number2);
alert(result);

