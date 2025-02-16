// function greet(name) {
//     console.log('Hello ' + name);
//   }

//   function getUserInput(callback) {
//     let name = 'Alice';
//     callback(name); // The function 'greet' is called here
//   }

//   getUserInput(greet);

//   function greet(name) {
//     console.log('Hello ' + name);
//   }

//   function getUserInput(greet) {
//     let name = 'Alice';
//     greet(name); // Calls the greet function with 'Alice'
//   }

//   function showMessage() {
//     console.log('This message is shown after 2 seconds');
//   }

//   setTimeout(showMessage, 2000);

//   document.addEventListener("keydown", respondToKey);
// function respondToKey(event) {
//   console.log(event.key);
// }

// $0.addEventListener("click", function (click) {
//     console.log(click);
//   });

//   function anotherEventListner(typeOfEvent, callback) {
//     //    this will create an event object
//     let eventThatHappened = {
//         //for example, we pressed the p key
//         eventType: "keydown",
//         key: "p",
//         durationOfKeyPress: 2
//     }
//       };

//       function anotherEventListner(typeOfEvent, callback) {
//         //    this will create an event object
//         let eventThatHappened = {
//           //for example, we pressed the p key
//           eventType: "keydown",
//           key: "p",
//           durationOfKeyPress: 2,
//         };
//         // We can provide back this information to the developer
//         callback(eventThatHappened);
//       }

//       if (eventThatHappened === typeOfEvent) {
//         callback(eventThatHappened);
//       }

//Problem 1: Basic Callback

//Description: Write a function greet that takes a name as a parameter and a callback function. The callback function should be called after greeting the user.

function greet(name) {
  console.log("hello " + name);
}

function userInput(greet) {
  let name = "Anum";
  greet(name);
}

userInput(greet);

//Problem 2: Array Manipulation with Callback

//Description: Write a function processArray that takes an array of numbers and a callback function. The callback should be used to process each number in the array (e.g., double it). Return a new array with the processed values.

function processArray(arr, double) {
  return arr.map(double);
}

let numbers = [1, 2, 3, 4];

function double(num) {
  return num * 2;
}

let doubled = processArray(numbers, double);
console.log(doubled);

// Problem 3: Event Handling with Callback

//Description: Create a simple event handler that changes the text of an HTML element when a button is clicked. The button's click event should trigger a callback function that updates the element's text.

document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("myElement").innerText = "new text";
});

//Problem 4: Chaining Callbacks

//Description: Write a function performOperations that accepts two numbers and two callback functions. The first callback should add the numbers, and the second callback should multiply the results of the addition.

function performOperations(num1, num2, addCallback, multiplyCallback) {
  return multiplyCallback(addCallback(num1, num2));
}

function add(a, b) {
  return a + b;
}
function multiply(value) {
  return value * 2;
}

let finalResult = performOperations(3, 4, add, multiply);
console.log(finalResult);

//arrow function, new method of javascript function

let divide = (a, b) => a / b;
console.log(divide(4, 4));
