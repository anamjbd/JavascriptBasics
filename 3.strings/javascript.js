// length is a property while slice is a method.

let myName = "anum";
let myNameLength = myName.length;
console.log(myNameLength);
let a = prompt("what is your name");
let a1 = a.length;
alert (prompt("what is your name").length);
alert("you have used " + a1 + " and remaining characters are " + (140-a1));

// slice
let myName1 = "anum";
let myNameslice = myName1.slice(0,3);
console.log(myNameslice);

let userInput = prompt("what is your name");
let userInputslice = userInput.slice(0,140);
alert (userInputslice);

let myName2 = "anum";
let myNameupper = myName2.toUpperCase();
console.log(myNameupper);


// practice test:

// 1. name a variable then ask a user to give name through prompt, 
let userName = prompt("what is your name");
console.log(userName);
// 2. capitalized the first letter just,
// a.extract first letter
let userNameFirstLetter = userName.slice(0,1);
console.log(userNameFirstLetter);
// b. capitalized the extracted letter
let capitalizedFirstLetter = userNameFirstLetter.toUpperCase();
console.log(capitalizedFirstLetter);
// c. exract rest of the name
let restOfTheName = userName.slice(1,userName.length);

console.log(restOfTheName);
// tolowercase rest of the name
let smallTheRestOfTheName = restOfTheName.toLowerCase();
console.log(smallTheRestOfTheName);

// d. concate the first letter and the rest of the name
let concateBoth = capitalizedFirstLetter+smallTheRestOfTheName;
console.log(concateBoth);
// 3. in ALERT show the resulting variable 
alert(concateBoth);
// let x = "ANUM";
// let x1 = x.toLowerCase();
// console.log(x1);
