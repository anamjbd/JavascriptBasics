// call the name or whatever, many times as you want, by just calling the function.

// vanilla: 

function userName() {
    console.log("your name is anum ")
}
let fatherName = prompt("your father name ");
userName();
console.log(fatherName);
userName(); 


function userAge() {
    console.log("you are twenty years old")
}
let fatherAge = prompt("enter your father age");
userAge();
console.log(fatherAge);
userAge();

// input(1):

function greetUser(name) {
    console.log("hello " + name)
}
greetUser("anum");
greetUser("aqsa");
let studentName = prompt("what is your name");
greetUser(studentName);
studentName = prompt("what is your name");
greetUser(studentName);
let teacherName = prompt("what is your teacher name ");
greetUser(teacherName);
teacherName = prompt("what is your teacher name");
greetUser(teacherName);


function seeOffUser(name) {
    console.log("goodbye " + name)
} 
seeOffUser("anum");


// input(2):

//         favourite color and age

function userFavouriteColorAndAge(color,age) { 
    alert("your favourite color is " + color + " and your age is " + age )
}
let userColor = "red";
let userAge1 = 12;
userFavouriteColorAndAge(userColor,userAge1);

// output:

//              average age

function averageAge(userAge2,fatherAge1) {
    let averageAge = (userAge2+fatherAge1)/2;
    return averageAge;
}
let userAge2 = +prompt("enter your age");
let fatherAge1 = +prompt("enter your father age");
let averageAge1 = averageAge(userAge2,fatherAge1);
console.log(averageAge1);


function favrtpet(pet) {
    return pet + " is my favrt pet ";
}
let pet = favrtpet("cat");
alert(pet);


function favrtHobby(hobby) {
    return hobby + " is my favrt hobby ";
}
let hobby = favrtHobby("gardening");
alert(hobby);


function sumAge(userAge2,fatherAge) {
let sumAge = userAge2+fatherAge;
return sumAge;
}
let userAge7 = +prompt(" your age is ");
let fatherAge7 = +prompt(" your father age is ");
let sumAge1 = sumAge(userAge7,fatherAge7);
alert(sumAge1);

function averageAge3() {
    let averageAge = sumAge1/2;
    return averageAge;
}
let sumAge5 = averageAge3();
alert(sumAge5);


function averageAge(userAge,motherAge,fatherAge) {
    let averageAge = (userAge+motherAge+fatherAge)/3; 
    return averageAge;
}
let userAgee = +prompt("Enter your age ");
let motherAge = +prompt("Enter your mother age");
let fatherAgee = +prompt("Enter your father age");
let togetherTheCharacters = averageAge(userAgee,motherAge,fatherAgee);
console.log(togetherTheCharacters);


// rounding

let x = 5.8;
let y = Math.round(x);
console.log(y);

// floor lessen's the value.

let a = Math.floor(x);
console.log(a);

// ceil increases the value like rounding.

let b = Math.ceil(x);
console.log(b);

let r = Math.trunc(x);
console.log(r);

let g = -5.8;
let g1 = Math.floor(g);
console.log(g1);

// trunc finishes all the values after the point.

let g2 = Math.trunc(g);
console.log(g2);

function calculateBottles(price,amount) {
    let numberOfBottles = Math.floor(amount/price);
    return numberOfBottles;
}
// parsefloat uses when alphabet comes after the numbers and after the decimal point

let totalPrice = +prompt("enter the price of bottles");
let totalMoney = +prompt("enter the money");
let totalPricee = parseFloat(prompt("enter the price of bottles"));
let totalMoneyy = +prompt("enter the money");
let bottles = calculateBottles(totalPricee,totalMoneyy);
console.log(bottles);


function calculateChange(bottles,price,amount) {
    let totalCost = bottles*price;
    let change = amount-totalCost;
    return change; 
}

let change = calculateChange(bottles,totalPrice,totalMoney);
// tofixed uses as many numbers as we want to fix 
let formatedChange = change.toFixed(2);
console.log(formatedChange);

//         random number

let rndmNum = Math.random();
console.log(rndmNum);

let randomNumber = (rndmNum*1000) + 1;
console.log(randomNumber);

let ludoDice = Math.random();
let dice = Math.floor(ludoDice*6) + 1;
console.log(dice);


let rndmNumb = Math.random();
let days = Math.floor(rndmNumb*7) +1;
console.log(days);
console.log("day number of week");


function userLuckScore(userNamePercentage)
{
let rndmNum = Math.random();
let luckNumber = Math.floor(rndmNum*101) +1;
return (luckNumber);
}
let userNamePercentage = prompt("enter your name");
let luckNumber = userLuckScore(userNamePercentage);
console.log(userNamePercentage   + " " +luckNumber +"%");


//         again did:


// function averageAge(userAge,fatherAge) {
//    let bothAverageAge = (userAge,fatherAge)/2;
//    console.log(bothAverageAge);
// }
// let userAge = +prompt("enter your age");
// let fatherAge = +prompt("enter your father age");
// averageAge(userAge,fatherAge);


// function familyExpenses(perMemberExpenses) {
//     let expenses = +prompt("Enter your expenses");
//     totalExpenses = expensesPerPerson*familyMembers;
//     return totalExpenses;

//  }
//  let membersExpenses = familyExpenses();
//  console.log(membersExpenses);


// function fvrtAnimal() {
//   console.log(" your favourite animal is tiger ")
// }
// let motherFvrtAnimal = prompt("what is your mother favourite animal");
// console.log(motherFvrtAnimal);
// fvrtAnimal();


// function userCaste(caste) {
//    console.log("your caste is " + caste)
// }
// let casteOfUser = prompt("what is your caste");
// userCaste(casteOfUser);




