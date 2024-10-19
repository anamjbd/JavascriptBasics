// this.innerHtml and nxt switch statement
// let j = document.querySelectorAll(".drum").length;
// for (let i = 0; i < j; i++) {
//   document.querySelectorAll(".drum")
//     [i].addEventListener("click", function () {
//       let buttonInnerHTML = this.innerHTML;
//       switch (buttonInnerHTML) {
//         case "w":
//         let crash = new Audio("sounds/snare.mp3");
//         crash.play();
//         break;
//         case "a":
//         let kickBass = new Audio("./sounds/kick-bass.mp3");
//         kickBass.play();
//         break;
//         case "s":
//         let snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//         break;
//         case "d":
//         let tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;
//         case "j":
//         let tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//         case "k":
//         let tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play()
//         break;
//         case "l":
//         let tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         default:
//         alert("invalid!");

//       }
// alert("i got clicked");
// let audio = new Audio("./sounds/crash.mp3");
// audio.play();
// this triggers the event

// console.log(this.style.color = "purple");
//   });
// }

//     let j = document.querySelectorAll(".drum").length;
// for (let i = 0; i < j; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     let buttonClicked = this.innerHTML;
//     console.log(buttonClicked);
//     let buttonAudio;
// makeSound(buttonClicked);
//     switch (buttonClicked) {
//       case "w":
//         buttonAudio = new Audio("./sounds/tom-1.mp3");
//         buttonAudio.play();
//         break;
//       case "a":
//         buttonAudio = new Audio("./sounds/tom-2.mp3");
//         buttonAudio.play();
//         break;
//       case "s":
//         buttonAudio = new Audio("./sounds/tom-3.mp3");
//         buttonAudio.play();
//         break;
//       case "d":
//         buttonAudio = new Audio("./sounds/tom-4.mp3");
//         buttonAudio.play();
//         break;
//       case "j":
//         buttonAudio = new Audio("./sounds/crash.mp3");
//         buttonAudio.play();
//         break;
//       case "k":
//         buttonAudio = new Audio("./sounds/kick-bass.mp3");
//         buttonAudio.play();
//         break;
//       case "l":
//         buttonAudio = new Audio("./sounds/snare.mp3");
//         buttonAudio.play();
//         break;

//       default:
//         console.log("Not in the range");
//     }
//   }

//       document
//     .querySelectorAll(".a")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/kick-bass.mp3");
//       audio.play();
//       });
//       document
//     .querySelectorAll(".s")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/snare.mp3");
//       audio.play();
//       });
//       document
//     .querySelectorAll(".d")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/tom-1.mp3");
//       audio.play();
//       });
//       document
//     .querySelectorAll(".j")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/tom-2.mp3");
//       audio.play();
//       });
//       document
//     .querySelectorAll(".k")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/tom-3.mp3");
//       audio.play();
//       });
//       document
//     .querySelectorAll(".l")
//     [i].addEventListener("click", function () {
//       let audio = new Audio("./sounds/tom-4.mp3");
//       audio.play();
//       });
// }

// function add(num1,num2){
//     return num1+num2;
// }

// function multiply(num1,num2){
//     return num1*num2;
// }

// function calculator(num1,num2,operator){
//     return operator(num1,num2);
// }

// console.log(calculator(4,5,add));
// console.log(calculator(4,5,multiply));
// debugger
// calculator(4,5,multiply);

// document.querySelectorAll("button") [0].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [1].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [2].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [3].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [:].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [5].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }
// document.querySelectorAll("button") [6].addEventListener("click" , buttonClick);
// function buttonClick() {
//     alert("I got click");
// }

/* javascript objects */

// let bellBoy1Name = "timmy";
// let bellBoy1Age = 21;
// let bellBoy1Permit = "true";
// let bellBoy1Languages = ["english" , "french"];
// console.log(bellBoy1Name);

// let bellBoy2Name = "gimmy";
// let bellBoy2Age = 23;
// let bellBoy2Permit = "true";
// let bellBoy2Languages = ["english" , "french"];

// by calling objects:
// let bellBoy1 = {
//   name: "timmy",
//   age: 21,
//   permit: "true",
//   languages: ["english" , "french"]
// }
// console.log(bellBoy1.name);

// let bellBoy2 = {
//   name: "gimmy",
//   age: 23,
//   permit: "true",
//   languages: ["english" , "french"]
// }
// console.log(bellBoy2.permit);

// constructor function:
// function BellBoy (name,age,permit,languages) {
//   this.name = name;
//   this.age = age;
//   this.permit = permit;
//   this.languages = languages;
// }

// let bellBoy1 = new BellBoy("Timmy" , 21 , true , ["English" , "Turkish"]);
// console.log(bellBoy1.languages);

// let bellBoy2 = new BellBoy("Gimmy" , 23 , false , ["English" , "Korean"]);
// console.log(bellBoy2.languages);

// function HouseKeeper (name, age, languages) {
//   this.name = name;
//   this.age = age;
//   this.languages = languages;
// }

// let houseKeeper = new HouseKeeper("Ann", 20, ["french"] );
// console.log(houseKeeper.name);

// function Manager(name,age,languages) {
//   this.name = name;
//   this.age = age;
//   this.languages = languages;
// }

// let manager1 = new Manager("John", 22, ["turkish", "japanese", "English"]);
// console.log(manager1.name);

// function moveSuitcase() {
//   alert("hello" );
// }

// switch (keypressed) {
//   case "w":
//     buttonAudio = new Audio("./sounds/tom-1.mp3");
//     buttonAudio.play();
//  break;
//  case "a":
//     buttonAudio = new Audio("./sounds/tom-2.mp3");
//     buttonAudio.play();
//     break;
//   case "s":
//     buttonAudio = new Audio("./sounds/tom-3.mp3");
//     buttonAudio.play();
//     break;
//   case "d":
//     buttonAudio = new Audio("./sounds/tom-4.mp3");
//     buttonAudio.play();
//     break;
//   case "j":
//     buttonAudio = new Audio("./sounds/crash.mp3");
//     buttonAudio.play();
//     break;
//   case "k":
//     buttonAudio = new Audio("./sounds/kick-bass.mp3");
//     buttonAudio.play();
//     break;
//   case "l":
//     buttonAudio = new Audio("./sounds/snare.mp3");
//     buttonAudio.play();
//     break;

//   default:
//     console.log("Not in the range");

// let j = document.querySelectorAll(".drum").length;
// for (let i = 0; i < j; i++) {
// document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     let buttonClicked = this.innerHTML;
//     makeSound(buttonClicked);
// })
// }

// document.addEventListener("keydown" , function(event) {
//    console.log(event);
//    console.log(event.key);
//      let keypressed=event.key;
//      makeSound(keypressed);

//      }
// )

function makeSound(key) {
  switch (key) {
    case "w":
      buttonAudio = new Audio("./sounds/tom-1.mp3");
      buttonAudio.play();
      break;
    case "a":
      buttonAudio = new Audio("./sounds/tom-2.mp3");
      buttonAudio.play();
      break;
    case "s":
      buttonAudio = new Audio("./sounds/tom-3.mp3");
      buttonAudio.play();
      break;
    case "d":
      buttonAudio = new Audio("./sounds/tom-4.mp3");
      buttonAudio.play();
      break;
    case "j":
      buttonAudio = new Audio("./sounds/crash.mp3");
      buttonAudio.play();
      break;
    case "k":
      buttonAudio = new Audio("./sounds/kick-bass.mp3");
      buttonAudio.play();
      break;
    case "l":
      buttonAudio = new Audio("./sounds/snare.mp3");
      buttonAudio.play();
      break;

    default:
      console.log("Not in the range");
  }
}

let j = document.querySelectorAll(".drum").length;
for (let i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    console.log(buttonClicked);
    let buttonAudio;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("touchstart", function () {
  documentClick = true;
});
document.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 400);
}
