let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Number Guesser code down here:

const generateTarget = () =>{
   return Math.floor(Math.random() * 10);
}

function compareGuesses (humanGuess, computerGuess, secretNum){
    // Calculate how far each guess is from the target
    const humanDistance = Math.abs(secretNum - humanGuess);
    const computerDistance = Math.abs(secretNum - computerGuess);

    // Compare distances - human wins if tied or closer
    if (humanDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) =>{
    const humnaScore = '';
    const compterScore = '';
      if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () =>{
    currentRoundNumber = currentRoundNumber + 1;
}