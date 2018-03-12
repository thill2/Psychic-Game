var wins = 0;
var losses = 0;
var left = 9;
var guesses = [];
var userGuess = "";
var text = "";
var computer = "";


document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log("User's guess: " + userGuess);  //log user's guess

//Setting computer's pick & making it reset when game resets
if(left == 9){
  var possible = "abcdefghijklmnopqrstuvwxyz";
    text = possible.charAt(Math.floor(Math.random() * possible.length));
    computer = text;
}
console.log("Computer's guess: " + computer);  //log computer's guess

//If user guesses right or wrong
if(userGuess == computer) {
  wins++;
  left = 9;
  guesses = [];
}else{
  guesses.push(userGuess);
  left--;
}

//If user's out of guesses
if(left == 0){
  losses++;
  left = 9;
  guesses = [];
}

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses. From RPS exercise.
var html =
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses left: " + left + "</p>" +
"<p>Your guessses so far: " + guesses + "</p>";

// Set the inner HTML contents of the #game div to our newly created html string
document.querySelector("#game").innerHTML = html;
}