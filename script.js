// I want to randomly select a word from a file that contains an array of words (like a dictionary in the form of a script file)
// Can be executed in two ways: Extracting from a script file or an API, 
//I will choose a script file that will contain an array of words that are 5 letters long

// This code snippet initialises the global variables I will use for the game
//Global variable is a variable that can be used outside a function and doesn't need to be reinitialised inside the functions
// WORDS is an array 
import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)