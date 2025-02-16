// var numberOfDrumButtons = $(".drum").length;
// // jquery .eq method
// // used to select each drum button eq
// for (var i = 0; i < numberOfDrumButtons; i++) {
// // $(".drum").eq(i).on("click", function () {
// //     var buttonInnerHTML = $(this).innerHTML;

// //     makeSound(buttonInnerHTML);
// //     buttonAnimation(buttonInnerHTML);
// //   });

//   // Handle touch events for mobile devices
//   $(".drum")
//     .eq(i).on("click touchstart", function () {
//       var buttonInnerHTML = this.innerHTML;

//       makeSound(buttonInnerHTML);
//       buttonAnimation(buttonInnerHTML);
//     });
// }

// // Keydown event for desktop
// document.addEventListener("keydown", function (event) {
//   makeSound(event.key);
//   buttonAnimation(event.key);
// });

// function makeSound(key) {
//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default:
//       console.log(key);
//   }
// }

// function buttonAnimation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);
//   if (activeButton) {
//     activeButton.classList.add("pressed");

//     setTimeout(function () {
//       activeButton.classList.remove("pressed");
//     }, 100);
//   }
// }














  let j = $(".drum").length;
  
  for (let i = 0; i < j; i++) {
    $(".drum").eq(i).on("click", function () {
      let buttonClicked = $(this).html();
      console.log(buttonClicked);
      makeSound(buttonClicked);
      buttonAnimation(buttonClicked);
    });
  }

  $(document).on("keydown", function (event) {
    console.log(event);
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    let buttonAudio;
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

  function buttonAnimation(currentKey) {
    let keyInUse = $("." + currentKey);
    keyInUse.addClass("pressed");
    setTimeout(function () {
      keyInUse.removeClass("pressed");
    }, 100);
  }
