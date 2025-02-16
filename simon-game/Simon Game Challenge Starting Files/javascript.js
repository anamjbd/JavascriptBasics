let colors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
function generateRndmColor(){
    let randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    let rndmColor = colors[randomNumber];
    gamePattern.push(rndmColor);
    $("#" + rndmColor ).fadeIn(100).fadeOut(100).fadeIn(100);
    // playSound(rndmColor);
    // var audio = new Audio("./sounds/"+ rndmColor +".mp3");
    // console.log(audio);
    // audio.play();
    
  
}

generateRndmColor();
console.log(gamePattern);

$(".btn").click (function() {
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  let colorsLength = colors[colors.length - 1];
console.log(colorsLength);
checkAnswer(userClickedPattern.length - 1);
  
})

function animatePress(currentColor) {
  let keyInUse = $("." + currentColor);
  keyInUse.addClass("pressed");
  setTimeout(function () {
    keyInUse.removeClass("pressed");
  }, 100);
}

let gameStarted = false;

$(document).keydown(function(){
  if(!gameStarted){
  gameStarted = true;
  nextSequence();
  }
})

  let level = 0;

function nextSequence(){
  level++;
  $("h1").text("Level " + level);

}


function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else {
    console.log("wrong");
playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
$("body").removeClass("game-over");
    },200)
    $("h1").text("gameOver");
startOver();

  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
// 1. Create a new function called startOver().

// 2. Call startOver() if the user gets the sequence wrong.

// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.

// game over
// 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.

// 2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.

// All going well, you should end up with a flash effect.
// 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.





// At this point, it might be worth reviewing how the Simon game works.

// Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

// Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

// If the user messes up the sequence, then the game ends.


// You can either try to figure out how to achieve this logic by trying to write the code yourself or you can follow the challenge steps below:

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel

// 2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

// e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.

// 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

// You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

// 4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

// 5. Call nextSequence() after a 1000 millisecond delay.

// 6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.











// let buttonColours = ["red", "blue", "green", "yellow"];


// let gamePattern = [];
// let userClickedPattern = [];


// //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keydown.
// let started = false;


// //2. Create a new letiable called level and start at level 0.
// let level = 0;


// //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// $(document).keydown(function () {
//   if (!started) {
//     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });


// $(".btn").click(function () {
//   let userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);


//   playSound(userChosenColour);
//   animatePress(userChosenColour);
// });


// function nextSequence() {
//   //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//   level++;


//   //5. Inside nextSequence(), update the h1 with this change in the value of level.
//   $("#level-title").text("Level " + level);


//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);


//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
//   playSound(randomChosenColour);
// }


// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }


// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }





// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

// 2. Create a new variable called level and start at level 0.

// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

// 5. Inside nextSequence(), update the h1 with this change in the value of level.

// All going well, this is what you should see when you refresh the website:










// add animation to the pressed button

// 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.

// 2. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.


// 3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

// 4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

// Once complete, you will get this effect when you click on any button.

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

//   //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}






// let buttonColours = ["red", "blue", "green", "yellow"];


// let gamePattern = [];


// //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// let userClickedPattern = [];


// //1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function () {
//   //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//   let userChosenColour = $(this).attr("id");


//   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//   userClickedPattern.push(userChosenColour);


//   //console.log(userClickedPattern);
// });


// function nextSequence() {
//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);


//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)








// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// --> So if the Green button was clicked, userChosenColour will equal its id which is "green".￼
// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
// At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.





// 1. Use jQuery to select the button with the same id as the randomChosenColour

// 2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
// 3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.


      








// 1.  Inside js create a new function 
// 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable 
// 3. At the top of the js file, create a new array and set it to hold the sequence of colors "red", "blue", "green", "yellow" .
// 4. Create a new variable and use the randomNumber from step 2 to select a random colour from the array.
// 5. At the top of the js file, create a new empty array .
// 6. Add the generated value in step 4 to the end of the gamePattern
