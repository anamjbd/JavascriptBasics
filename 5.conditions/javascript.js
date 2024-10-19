// "===" checks the data type also, "==" only solves the data.

let a = +prompt("first value");
let b = +prompt("second value");
if (a > b) {
  alert("a is greater than b");
} else {
  alert("a is not greater than b");
}

// == check
let c = 1;
let d = "1";
if (c == d) {
  alert("c is equal to d");
} else {
  alert("c is not equal to d");
}

// === check
if (c === d) {
  alert("c is equal to d");
} else {
  alert("c is not equal to  d");
}

//  use of === and >
let a1 = +prompt("enter the first value");
let b1 = +prompt("second value");
if (a1 === b1) {
  alert("a1 is greater than b1");
}
if (a1 > b1) {
  alert("a1 is not greater than b1");
} else {
  alert("a1 is less than b1");
}

let e = +prompt("enter the value");
if (e > 90) {
  alert("e is greater than 90");
}
if (e > 80) {
  alert("e is greater than 80");
}
if (e > 70) {
  alert("e is greater than 70");
} else {
  alert("e is less than 70");
}

//  we uses else if when we want just one statement, but the other values are also come

let f = +prompt("enter the value");
if (f > 90) {
  alert("f is greater than 90");
} else if (f > 80) {
  alert("f is greater than 80");
} else if (f > 70) {
  alert("f is greater than 70");
} else {
  alert("f is less than 70");
}

// combining comparatives
//  use of && and ||
let g = +prompt("enter the value");
if (g > 70 && g <= 80) {
  alert("a is greater than 70 and less than equal to 80");
} else if (g > 70 || g < 80) {
  alert("g is between 70 and 80");
} else {
  alert("a is less than 70");
}

// Examples:

// write a program where user enter his age and your program will tell him that if he can vote or not
// let a = +prompt("enter your age");
// if (a>=18 ) {
//     alert("he can vote");
// }
// else {
//     alert("he can't vote");
// }

// write a program that checks if a student has passed an exams and prints pass or fail.

// let a = +prompt("enter your marks");
// let b = +prompt("passing marks");
// if (a<50) {
//     alert("you got F grade");
// }
// if (a>=50) {
//     alert("you have passed the exam");
// }
// else {
//     alert("you are fail");
// }

// write a program which checks if a user is child, a teenager or an adult
//13-child, 18- a teenager, above 18-adult

// let a = +prompt("enter your age");
// if (a<=13) {
//     alert("you are a child");
// }
// else if (a<=18){
//     alert("you are a teenager");
// }
// else {
//     alert("you are an adult");
// }

// luck score  which shows a person's luck, 30 to 50 percent (worst luck), 50 to 70 (average luck) and 70 to 90 percent (good luck):

// let a = +prompt ("enter your luck score");
// if (a>=30 && a<50) {
//     alert("you have worst luck score.")
// }
// else if (a>=50 && a<70) {
//     alert("you have an average luck score");
// }
// else if (a>=70 && a<100) {
//     alert("you have a good luck score");
// }
// else {
//     alert("your luck score is not good at all");
// }

// when we have to check conditions together.(nesting)

// let a = +prompt("enter your age");
// if (a > 18) {
//   if (a >= 21) {
//     alert("you can drive");
//   } else {
//     alert("you can't drive");
//   }
// }
//  else {
//   alert("you are not an adult");
// }

// enter a numb, if writes 1 then monday 2 tuesday and to 7 sunday. above 7 entered num is not valid

// let a = +prompt("enter a number");
// if (a===1) {
//     alert("it's monday");
// }
// else if (a===2) {
//     alert("it's tuesday");
// }
// else if (a===3) {
//     alert("it's wednesday");
// }
// else if (a===4) {
//     alert("it's thursday");
// }
// else if (a===5) {
//     alert("it's friday");
// }
// else if (a===6) {
//     alert("it's saturday");
// }
// else if (a===7) {
//     alert("it's sunday");
// }
// else {
//     alert("the entered number is not valid");
// }

// if we dont want to use if or else if many times then switch statement comes.
// switch statements:

// let day = +prompt("enter the number");
// switch (day) {
//   case 1:
//     alert("it's monday");
//     break;
//   case 2:
//     alert("it's tuesday");
//     break;

//   case 3:
//     alert("it's wednesday");
//     break;

//   case 4:
//     alert("it's thursday");
//     break;

//   case 5:
//     alert("it's friday");
//     break;

//   case 6:
//     alert("it's saturday");
//     break;

//   case 7:
//     alert("it's sunday");
//     break;

//   default:
//     alert("the entered number is invalid.");
// }

// create a switch statement that checks the month number (1-12) and prints the month name:

// let month = +prompt("enter the month number");
// switch (month) {
//   case 1:
//     alert("this month is january");
//     break;
//   case 2:
//     alert("this month is february");
//     break;
//   case 3:
//     alert("this month is march");
//     break;
//   case 4:
//     alert("this month is april");
//     break;
//   case 5:
//     alert("this month is may");
//     break;
//   case 6:
//     alert("this month is june");
//     break;
//   case 7:
//     alert("this month is july");
//     break;
//   case 8:
//     alert("this month is august");
//     break;
//   case 9:
//     alert("this month is september");
//     break;
//   case 10:
//     alert("this month is october");
//     break;
//   case 11:
//     alert("this month is november");
//     break;
//   case 12:
//     alert("this month is december");
//    break;
//   default:
//     alert("the number that you have entered, is invalid");

// }

// write a switch statement that takes a traffic light color(red, yellow, green) and whether to "Stop", "Caution", or "Go".

// let color = prompt("enter the traffic light color");
// switch (color) {
//   case "red":
//     alert("stop");
//     break;
//   case "yellow":
//       alert("caution");
//       break;
//   case "green":
//     alert("go");
//     break;
//   default:
//       alert("this color is not working");
// }

// create a program using switch to output a restaurant menu based on a number entered (1 for "pizza", 2 for "Burger", 3 for "pasta").

// let menu= +prompt("enter your choice by using numbers ");
// switch (menu) {
//   case 1:
//     alert("pizza");
//     break;
//   case 2:
//       alert("burger");
//       break;
//   case 3:
//     alert("pasta");
//     break;
//   default:
//       alert("this is unavailable here");
// }

// javascript program that performs a task it prompt a user to enter num, check whether the number is positive, negative or zero , display an alert message.

// let number = +prompt("enter the number");
// if (number>0){
//   alert("this number is positive");
// }
// else if (number<0) {
//   alert("the number is negative");
// }
// else {
//   alert("not in number");
// }

// function program(number){
// if (number>0){
//   return "this number is positive";
// }
// else if (number<0) {
//   alert("the number is negative");
// }
// else {
//   alert("not in number");
// }
// }
// let number = +prompt("enter the number");
// let numberCheck = program(number);
// alert(numberCheck);

// let year = +prompt("enter the year");
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       alert(year + " is a leap year");
//     }
//     else {
//       alert(year + " is not a leap year");
//     }
//   }
// else {
//   alert(year + " is a leap year");
//   }
// }
//  else {
//   alert(year + " is not a leap")
//  }

let year = +prompt("enter the year");
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      alert(year + " is a leap year");
    } else {
      alert(year + " is not a leap year");
    }
  } else {
    alert(year + " is a leap year");
  }
} else {
  alert(year + " is not a leap");
}
