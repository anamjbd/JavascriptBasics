// console.log(document.querySelector("h1"));
// console.log($("#myElement"));
// document.querySelector("h1").style.color="blue";
// color
// $("h1").css("color", "red");
// console.log($("h1").css("color"));
// add class
// $("h1").addClass("beta");

// text change
// $("h1").text("<em>pakistan</em>");
// with writing text, the text is not converted in italic form but with html it's converted
$("h1").html("<em>pakistan</em>");
$("h2").html("<em>pakistan</em>");

//________attributes____//
//========
///--------
//\\\\\\\\
console.log($("img").attr("src"));
// if we want to replace
// $("img").attr("src","https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg");

$("a").attr("href", "https://www.yahoo.com");
$("h1").attr("class", "alpha");

$("h1").click(function () {
  $("h1").css("color", "orange");
});

for (let i = 0; i < 3; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
  });
}

// above for loop short form
// $("button").click(function () {
//   $("h1").css("color", "blue");
// });

$("button").click(function () {
  $("h2").text("England");
});

// document.querySelector("input").addEventListener("keydown", function (event) {
//     console.log(event.key);
//   });

// $("input").keydown(function (event) {
// console.log(event.key);
// });


// body and document both works same but applying body is not right in a situation when a developer applies some restrictions in his code, on the other side document alright.
//   $("body").keydown(function (event) {
//     console.log(event.key);
//   });

// $(document).keydown(function (event) {
//   console.log(event.key);
// });

// -------------problem--------------- //
//add an event listener to the document which changes the text of the h1 with the key pressed//

// $(document).keydown(function (event) {
//   $("h1").text(event.key);
// });

$("h1").on("mouseover", function(){
 $("h1").css("color", "pink" );
})

// in vanilla:
// $("h1").on("mouseover mouseleave", function () {
//   $(this).toggleClass("red black"); // Toggle between red and black classes
// });

$("h1").on("mouseleave", function(){
 $("h1").css("color", "brown" );
})

$("h1").before("<button>pakistan</button>");
// In Vanilla
//  document.querySelector("h1").insertAdjacentHTML("beforebegin", "<button>News</button>");

$("h1").after("<button>England</button>");
// // document.querySelector("h1").insertAdjacentHTML("afterend", "<button>News</button>");

// prepend
$("h1").prepend("<button>News2</button>");
//Vanilla js
// document.querySelector("h1").insertAdjacentHTML("afterbegin", "<button>News2</button>");

//append
$("h1").append("<button>News2</button>");
//Append
// document.querySelector("h1").insertAdjacentHTML("beforeend", "<button>News2</button>");

// $("button").click(function () {
//   $("h1").hide();
// });
// in vanilla:
// document.querySelector("button").addEventListener("click", function() {
//   document.querySelector("h1").style.display = "none";
// });

// $("button").click(function () {
//   $("h1").show();
// });
// vanilla:
// document.querySelector("button").addEventListener("click", function() {
//   document.querySelector("h1").style.display = "block"; // Or use an empty string to reset it
// });

//toggle
// hide or show by clicking the button
$("button").click(function () {
  $("h1").toggle();
});
// in vanilla the syntax is:
// document.querySelector("button").addEventListener("click", function () {
//   const h1 = document.querySelector("h1");
//   // Check the current display style and toggle it
//   if (h1.style.display === "none" || h1.style.display === "") {
//     h1.style.display = "block"; // Show the <h1>
//   } else {
//     h1.style.display = "none"; // Hide the <h1>
//   }
// });

// fadeout
$("button").click(function () {
  $("h1").fadeOut();
});
//{/* <button>Fade Out</button>
//{/* <h1>Hello, World!</h1>

//h1 { */}
  // transition: opacity 0.5s ease; /* Transition for fade effect */ */}
// }

// .fade-out {
//   opacity: 0; /* Fade to transparent */
// }

// document.querySelector("button").addEventListener("click", function() {
//   const h1 = document.querySelector("h1");
//   h1.classList.add("fade-out"); // Add the fade-out class to initiate fading

  // Optionally, hide the element after fading out
  // setTimeout(() => {
  //   h1.style.display = "none"; // Hide the element after the fade-out effect
  // }, 500); // Match the timeout to the duration in CSS (0.5s)
// });

// $("h1").fadeIn();


$("button").click(function () {
  $("h1").fadeToggle();
});

//html 
//<button>Fade Toggle</button>
//<h1 style="opacity: 0; display: none;">Hello, World!</h1>

//Css
//h1 {
  //transition: opacity 0.5s ease; /* Transition for the fade effect */
//}

//Js
// document.querySelector("button").addEventListener("click", function() {
//   const h1 = document.querySelector("h1");

//   if (h1.style.display === "none" || h1.style.opacity === "0") {
//     h1.style.display = "block"; // Show the element
    // setTimeout(() => {
    //   h1.style.opacity = "1"; // Fade in
    // }, 10); // Small timeout to trigger the transition
  // } else {
  //   h1.style.opacity = "0"; // Fade out
    // Hide the element after fading out
    // setTimeout(() => {
      // h1.style.display = "none"; // Hide the element after the fade out effect
    // }, 500); // Match this timeout to the duration in CSS (0.5s)
//   }
// });

// $("button").click(function () {
//   $("h1").slideUp();
// });
//html
//{/* <button>Slide Up</button>
//<h1 style="height: auto; overflow: hidden;">Hello, World!</h1> */}

//Css
// h1 {
//   transition: height 0.5s ease; /* Transition for the height change */
//   height: auto; /* Start with auto height */
// //}

//Js
// document.querySelector("button").addEventListener("click", function() {
//   const h1 = document.querySelector("h1");
  
//   // Get the current height of the <h1> element
//   const height = h1.scrollHeight;

//   // Set the height to the current height for the transition
//   h1.style.height = height + "px"; // Set the height for the transition
  
//   // Use a timeout to trigger the transition
//   setTimeout(() => {
//     h1.style.height = "0"; // Slide up by setting height to 0
  // }, 10); // Small timeout to trigger the transition
  
  // Optionally hide the element after the slide up effect
  // setTimeout(() => {
  //   h1.style.display = "none"; // Hide the element after sliding up
  // }, 500); // Match this timeout to the duration in CSS (0.5s)
//});

// $("button").click(function () {
//   $("h1").slideDown();
// });
//html
//{/* <button>Slide Up</button>
//<h1 style="height: auto; overflow: hidden;">Hello, World!</h1>

//Css
//h1 {
  //transition: height 0.5s ease; /* Transition for the height change */
//   height: auto; /* Start with auto height */ */}
// }

//Js
// document.querySelector("button").addEventListener("click", function() {
//   const h1 = document.querySelector("h1");
  
//   // Get the current height of the <h1> element
//   const height = h1.scrollHeight;

  // Set the height to the current height for the transition
  // h1.style.height = height + "px"; // Set the height for the transition
  
  // Use a timeout to trigger the transition
  // setTimeout(() => {
  //   h1.style.height = "0"; // Slide up by setting height to 0
  //}, 10); // Small timeout to trigger the transition
  
  // Optionally hide the element after the slide up effect
  // setTimeout(() => {
  //   h1.style.display = "none"; // Hide the element after sliding up
  // }, 500); // Match this timeout to the duration in CSS (0.5s)
//});


// $("button").click(function () {
//   $("h1").slideToggle();
// });
// /html
// <button>Slide Toggle</button>
// <h1 style="height: 0; overflow: hidden; opacity: 0; display: none;">Hello, World!</h1>


//Css
// h1 {
//   transition: height 0.5s ease, opacity 0.5s ease; /* Transition for height and opacity */
//}


//Js
// document.querySelector("button").addEventListener("click", function() {
//   const h1 = document.querySelector("h1");

//   if (h1.style.display === "none" || h1.style.opacity === "0") {
//     h1.style.display = "block"; // Show the element
//     const height = h1.scrollHeight; // Get the full height of the element
    // h1.style.height = "0"; // Set initial height for transition
    // h1.style.opacity = "0"; // Set opacity to 0 for fade effect

    // Use a timeout to trigger the height transition
    // setTimeout(() => {
    //   h1.style.height = height + "px"; // Set the height for slide down
    //   h1.style.opacity = "1"; // Fade in the element
  //   }, 10); // Small timeout to trigger the transition
  // } else {
  //   h1.style.opacity = "0"; // Start fading out
  //   h1.style.height = h1.scrollHeight + "px"; // Set height to current height for transition

    // Use a timeout to allow the opacity transition to happen before hiding
    // setTimeout(() => {
    //   h1.style.height = "0"; // Slide up by setting height to 0
    // }, 10); // Small timeout to trigger the transition

    // Optionally hide the element after sliding up
    // setTimeout(() => {
    //   h1.style.display = "none"; // Hide the element after the slide up effect
    // }, 500); // Match this timeout to the duration in CSS (0.5s)
//   }
// });



// jQuery Effect Methods (website).