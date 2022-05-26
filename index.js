// Detecting Button Press
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // "this" gets the identity of the button that triggered the event
    var buttonInnerHTML = this.innerHTML;

    // when the button is clicked on it will run makeSound and go through switch statement
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Button Press
// when a key is pressed it will send the key pressed to makeSound and go through the switch statement
document.addEventListener("keydown", function(event) {
  makeSound(event.key); //this event contains a property called key that gives us the key that was pressed

  buttonAnimation(event.key);
})

// Switch statement to find corresponding sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// animates to show that button was pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  // adds the class of "pressed" to the button that was pressed
  activeButton.classList.add("pressed");

  // parameters: what you want it to do, amount of time to wait before we run the function (milli secs)
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
