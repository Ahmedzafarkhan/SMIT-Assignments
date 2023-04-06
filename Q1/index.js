// (Enter first number)
let num1 = prompt("Enter  first number:");

// (Enter second number)
let num2 = prompt("Enter  second number:");

// Convert the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);

// Compare & display the larger one in the console
if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
}
