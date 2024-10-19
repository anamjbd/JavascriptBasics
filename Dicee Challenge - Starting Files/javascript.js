let rndmNum = Math.random();
let dice = Math.floor(rndmNum * 6) + 1;
console.log(dice);
let images = "dice" + dice;
console.log(images);
let imgSrc = "./images/" + images + ".png";
console.log(imgSrc);
document.querySelectorAll("img")[0];
document.querySelectorAll("img")[0].setAttribute("src", imgSrc);

let rndmNumb = Math.random();
let ludoDice = Math.floor(rndmNumb * 6) + 1;
console.log(ludoDice);
let images1 = "dice" + ludoDice;
console.log(images1);
let imageSrc = "./images/" + images1 + ".png";
console.log(imageSrc);
document.querySelectorAll("img")[1];
document.querySelectorAll("img")[1].setAttribute("src", imageSrc);

let rndmNumbr = Math.random();
let ludoDice1 = Math.floor(rndmNumbr * 6) + 1;
console.log(ludoDice);
let images2 = "dice" + ludoDice1;
console.log(images2);
let imgS = "./images/" + images2 + ".png";
console.log(imgS);
document.querySelectorAll("img")[2];
document.querySelectorAll("img")[2].setAttribute("src", imgS);

let rndmNumber = Math.random();
let dice1 = Math.floor(rndmNumber * 6) + 1;
console.log(dice1);
let images3 = "dice" + dice1;
console.log(images3);
let imgSrc1 = "./images/" + images3 + ".png";
console.log(imgSrc1);
document.querySelectorAll("img")[3];
document.querySelectorAll("img")[3].setAttribute("src", imgSrc1);

if (dice > ludoDice && dice > dice1 && dice > ludoDice1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins " + dice;
} else if (ludoDice > dice && ludoDice > ludoDice1 && ludoDice > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins " + ludoDice;
} else if (dice1 > ludoDice1 && dice1 > ludoDice && dice1 > dice) {
  document.querySelector("h1").innerHTML = "Player 3 Wins " + ludoDice1;
} else if (ludoDice1 > dice1 && ludoDice1 > ludoDice && ludoDice1 > dice) {
  document.querySelector("h1").innerHTML = "Player 4 Wins " + dice1;
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
