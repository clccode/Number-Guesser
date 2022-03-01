let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generating the random number:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

// Function to compare guesses:
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(humanGuess - targetGuess);
  const computerDifference = Math.abs(computerGuess - targetGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else if (computerDifference < humanDifference) {
    return false;
  }
}

// Function to compare the result and update the score:
const updateScore = (winner) => {
  winner == 'human' ? humanScore++ : computerScore++;
}

// Function to advance the round:
const advanceRound = () => currentRoundNumber++;