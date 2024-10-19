// let studentName = ["anum", "iqra", "aqsa"];
// console.log(studentName);
// console.log(studentName[0]);
// console.log(studentName[1]);
// console.log(studentName[2]);

// // extract variable from an array:

// let myName = studentName[0];
// console.log(myName);
// console.log(studentName.length);
// let name1 = studentName[studentName.length - 1];
// console.log(name1);
// // he scores 100 or not
// let scores = [30, 45, 50, 70, 100];
// console.log(scores.includes(100));
// // score is an array and include is a method
// if (scores.includes(100)) {
//   alert("your scores are excellent");
// } else {
//   alert("try hard");
// }
// // guest list 6 g, 3rd guest print, you are not allow today other one say welcome if he is include.
// let guests = ["anum", "navera", "rijja", "sumble", "iqra", "aqsa"];
// let thirdGuest = guests[guests.length - 4];
// // return thirdGuest;
// function program(guestName) {
//   if (guests.includes(guestName)) {
//     alert("you're welcome");
//   } else {
//     alert("you're not allow");
//   }
// }
// let guestName = prompt("enter the guest name");
// let allGuests = program(guestName);
// console.log(allGuests);
// let guestName1 = prompt("name");
// let allGuests1 = program(guestName1);
// console.log(allGuests1);

// push adds values and pop diminishes the last one.
let x = ["a", "b"];
console.log(x);
x.push("c");
console.log(x);
x.push("d", "e");
console.log(x);
x.pop();
console.log(x);

y = [];
y.pop();
console.log(y);

// Write a program that prints the numbers from 1 to 100. But for multiples of three print "fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// let output = [];
// let count = 1;
// function fizzBuzz() {
//  if (count % 3 === 0 && count % 5 === 0){
//   output.push("fizzBuzz");
//  }
//   if (count % 3 === 0)  {
//     output.push("fizz");
//   }
//   else if (count % 5 === 0) {
//     output.push("buzz");
//   }
//   else {
//     output.push(count);
//   }
//   console.log(output);
//   count++;
// }
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

let output = [];
let count = 1;
function woofMeow() {
  while (count <= 100) {
    if (count > 50) {
      output.push(count);
    } else {
      if (count % 4 === 0 && count % 7 === 0) {
        output.push("woofMeow");
      } else if (count % 4 === 0) {
        output.push("woof");
      } else if (count % 7 === 0) {
        output.push("meow");
      } else {
        output.push(count);
      }
    }
    console.log(output);
    count++;
  }
}

woofMeow();

// let output = [];

// function woofMeow() {
//   for (let count = 1; count <= 100; count++) {
//     if (count > 50) {
//       output.push(count);
//     } else {
//       if (count % 4 === 0 && count % 7 === 0) {
//         output.push("woofMeow");
//       } else if (count % 4 === 0) {
//         output.push("woof");
//       } else if (count % 7 === 0) {
//         output.push("meow");
//       } else {
//         output.push(count);
//       }
//     }
//     console.log(output);
//   }
// }

// woofMeow();

// let output = [];
// output.push(1);
// console.log(output);
// output.push(2);
// console.log(output);
// output.push(3);
// console.log(output);
// output.push(4);
// console.log(output);
// output.push(5);
// console.log(output);

// write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
//   Important: The output should be returned from the function.

function whosPaying(names) {
  let rndmNames = members[Math.floor(Math.random() * names.length)];
  return rndmNames;
}

let members = ["anum", "navera", "rijja", "sarah", "ania"];
let selectedOne = whosPaying(members);
console.log(selectedOne + " pays the bill.");
