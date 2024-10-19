// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// //  for loop
// for (let j = 1; j <= 5; j++) {
//   console.log(j);
// }

// // create a loop that prints even numbers from 2 to 20.

// for (let k = 2; k <= 20; k += 2) {
//   console.log(k);
// }

// // wtite a javascript program that asks the user to input a number and then generates and prints multiplication table for that number from 1 to 10

// let number = +prompt("enter a table number");
// for (let l = 1; l <= 10; l++) {
//   console.log(number + " * " + l + " = " + number * l);
// }

// let g = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let h = 0; h < g.length; h++) {
//   sum = sum + g[h];
// }
// console.log(sum);

// input from user

let password = "";
let correctPassword = "12345";
while (password !== correctPassword) {
  password = prompt("enter correct password");
}

console.log("correct password entered");
