// let authorName = "Pablo";
// let a = prompt("what's the author name")
// console.log(a);
// let a1 = authorName.slice(0,1);
// let capitalizedTheCharacter = a1.toUpperCase();
// console.log(capitalizedTheCharacter);
// let extractLetters = authorName.slice(1,authorName.length);
// console.log(extractLetters);
// let concate = capitalizedTheCharacter+extractLetters;
// console.log(concate);
// alert(concate);

// user first name
let userFirstName = prompt("what is your first name");
console.log(userFirstName);
let cutOutFirstLetter = userFirstName.slice(0,1);
let firstCharacterCapital = cutOutFirstLetter.toUpperCase();
console.log(firstCharacterCapital);
let extractRemainingLetters = userFirstName.slice(1,4);
let charactersLittle = extractRemainingLetters.toLowerCase();
console.log(charactersLittle);
let concateName = firstCharacterCapital+charactersLittle;
console.log(concateName);
// last name
let userSurname = prompt("what is your surname");
console.log(userSurname);
let extractFirstCharacter = userSurname.slice(0,1);
let capitalized = extractFirstCharacter.toUpperCase();
console.log(capitalized);
let remainingLettersExract = userSurname.slice(1,3);
let lettersSmall = remainingLettersExract.toLowerCase();
console.log(lettersSmall);
let concateBoth = capitalized+lettersSmall;
console.log(concateBoth);
let concateUsername = concateName + " " + concateBoth ;
console.log(concateUsername);

let userAge = prompt("enter your age");
console.log(userAge);
let userAgeIntoNumber = +userAge;
console.log(userAgeIntoNumber);


// father's first name
let fatherFirstName = prompt("what's your father name");
console.log(fatherFirstName);
let extractFirstLetter = fatherFirstName.slice(0,1);
let firstLetterBig = extractFirstLetter.toUpperCase();
console.log(firstLetterBig);
let extraxtRestOfTheName = fatherFirstName.slice(1,6);
let smallCharacters = extraxtRestOfTheName.toLowerCase();
console.log(smallCharacters);
let togetherTheLetters = firstLetterBig+smallCharacters;
console.log(togetherTheLetters);

// last name
let fatherSurname = prompt("what's your father surname");
console.log(fatherSurname);
let firstCharacterExtract = fatherSurname.slice(0,1);
let firstCharacterBig = firstCharacterExtract.toUpperCase();
console.log(firstCharacterBig);
let extractRestOfTheName = fatherSurname.slice(1,3);
 let restOfTheNameSmall = extractRestOfTheName.toLowerCase();
 console.log(restOfTheNameSmall);
 let concate = firstCharacterBig+restOfTheNameSmall;
 console.log(concate);

 let concateFatherName = togetherTheLetters  + " " + concate;
 console.log(concateFatherName);

 let fatherAge = prompt("enter your father age");
 console.log(fatherAge);
 let fatherAgeIntoNumber = +fatherAge;
 console.log(fatherAgeIntoNumber);
 

 let averageAge = (userAgeIntoNumber+fatherAgeIntoNumber)/2;
 console.log(averageAge);
 
 


alert(" your name is " + concateUsername + " and your father name is " + concateFatherName);