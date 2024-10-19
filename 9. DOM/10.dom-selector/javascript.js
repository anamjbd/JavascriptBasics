// document.firstElementChild.lastElementChild.lastElementChild.lastElementChild
// let list = document.firstElementChild.lastElementChild.children[4].children[2];
// //  document.firstElementChild.lastElementChild.lastElementChild.lastElementChild
// list.innerHTML= "anum";
// // list.style.color="purple";

// document.getElementsByTagName("li");

// // document.getElementsByTagName("li").style.color="red";
// document.getElementsByTagName("li")[1].style.color="red";

document.firstElementChild.lastElementChild.firstElementChild.style.color =
  "brown";

document.firstElementChild.lastElementChild.children[1].style.color = "purple";

document.querySelector("input").click();

document.firstElementChild.lastElementChild.children[3].style.color = "blue";

document.getElementsByTagName("li")[0].style.color = "lime";
document.getElementsByTagName("a")[1].style.color = "lime";

document.getElementsByTagName("li")[1].style.color = "yellow";
console.log(document.getElementsByTagName("li").length);

document.getElementsByTagName("li")[2].style.color = "pink";

// use of class
document.getElementsByClassName("btn")[0].style.color = "orange";
// in id we can't use value just use id name cuz there's written just element.
document.getElementById("alpha").style.color = "purple";

// change of heading by id:
document.getElementById("test");
let heading = document.getElementById("test");
heading.innerHTML = "Document Object Model";

document.querySelector("h1").style.color = "blue";

document.querySelector("#test").style.color = "lime";
// combiners
document.querySelector("li a").style.color = "yellow";

document.querySelectorAll("btn");
// background color
document.querySelector("h1").style.backgroundColor = "blue";
// size
document.querySelector("h1").style.fontSize = "20px";
