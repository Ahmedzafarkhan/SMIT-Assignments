let num1 = (prompt("Enter the first number: "));
let num2 = (prompt("Enter the second number: "));
let num3 = (prompt("Enter the third number: "));
let num4 = (prompt("Enter the fourth number: "));
let num5 = (prompt("Enter the fifth number: "));

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

console.log("The largest number is: " + largest);
