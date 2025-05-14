let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// return a random integer between 0 and 9
const generateTarget = () => {
  const randomNum = Math.floor(Math.random()* 10);
  return randomNum
}

// tie between human and comp goes to player as a WIN
const compareGuesses = (humanNum, compNum, targetNum) => {
  const humanDelta = Math.abs(targetNum - humanNum);
  const compDelta = Math.abs(targetNum - compNum);

  if (humanDelta === compDelta) {
    return true
  } else if (humanDelta < compDelta) {
    return true
  } else {
    return false
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
    return humanScore
  } else if (winner === 'computer') {
    computerScore++;
    return computerScore
  } else {
    return 'enter human or computer as winner'
  }
}

const advanceRound = () => {
  currentRoundNumber++;
  return currentRoundNumber
}

console.log(generateTarget());
console.log(compareGuesses(3, 7, 5));
console.log(compareGuesses(2, 2, 4));
console.log(compareGuesses(3, 2, 5));
console.log(compareGuesses(3, 6, 5));

console.log(updateScore('human'));
console.log(updateScore('computer'));
console.log(updateScore('nonsense'));
console.log(advanceRound());
