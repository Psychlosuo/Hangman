//..........The variables........//
alert("Press any Key to Throw a disc!")
//Disc Brands we will be referencing
var discBrand = ["innova", "discraft", "westside", "mvp", "legacy", "infinite"]
//Choose Word Randomly
var brandWord = Math.floor(Math.random() * discBrand.length);
var choosenWord = discBrand[brandWord];
console.log(choosenWord)

// This will break the solution into individual letters to be stored in array.
var underScore = [];
var rightGuess = [];
var wrongGuess = [];
var lettersInChosenWord = [];
var numBlanks = 0;
var letterGuessed = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 5;

//Create underscores based on length of word
var makeUnderScore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(makeUnderScore());

//.............The Game Code.............//

//get user's Input of the guess
document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
}

console.log(letterGuessed())



