function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter a number:"));
const result1 = divide(number1, number2);
alert(result1);


//Function to convert farenheit to celcius//
function convert(tempF, constant) {
  return tempF - constant;
  }
  const tempF =prompt("Enter a number in Farhenheit:");
  const constant = 32;
  const result = convert(tempF, constant);
  
  alert(result * 0.556)