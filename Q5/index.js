
const marks = [80, 90, 70, 60, 50];
const sum = marks.reduce((acc, val) => acc + val, 0);
const average = sum / marks.length;

//  grade on average
let grade;
if (average < 60) {
  grade = 'F';
} else if (average < 70) {
  grade = 'D';
} else if (average < 80) {
  grade = 'C';
} else if (average < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

//  average and the grade
console.log(`Average marks: ${average}`);
console.log(`Grade: ${grade}`);
